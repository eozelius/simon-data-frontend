import Api from './Api'
import axios from 'axios'

describe('Api', () => {
  let axiosSpy
  
  describe('sendEmail', () => {
    const campaign = {
      name: 'mock campaign',
      description: 'mock description',
      subject: 'mock subject',
      sender: 'mock sender',
      discountCode: 'mock discountCode',
      discountRate: 'mock discountRate'
    }
    const recipients = [
      {
        name: 'asdf',
        email: 'asdf@asdf.com'
      }
    ]
    
    beforeEach(() => {
      axiosSpy = jest
        .spyOn(axios, 'post')
        .mockResolvedValue({
          message : 'emails sent successfully'
        })
    })
    
    it('sends a POST request with campaign and recipient payload', async () => {
      const response = await Api.sendEmail({
        recipients,
        campaign
      })

      expect(axiosSpy).toHaveBeenCalledWith(
        'http://localhost:3000/send-email',
        expect.objectContaining({
          campaign: expect.any(Object),
          recipients: expect.any(Array)
        })
      )
    })
  })

  describe('fetchEmailCampaigns', () => {
    const emailCampaigns = [
      {
        id: 1,
        name: 'mock campaign',
        description: 'mock description',
        subject: 'mock subject',
        sender: 'mock sender',
        discount_code: 'mock discountCode',
        discount_rate: 'mock discountRate'
      }
    ]

    beforeEach(() => {
      axiosSpy = jest
        .spyOn(axios, 'get')
        .mockResolvedValue(emailCampaigns)
    })
    
    it('fetches all Email Campaigns', async () => {
      const response = await Api.fetchEmailCampaigns()

      expect(response).toEqual(emailCampaigns)
    })
  })
})