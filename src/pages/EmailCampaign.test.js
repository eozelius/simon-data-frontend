import React from 'react'
import { shallow } from 'enzyme'
import EmailCampaign from './EmailCampaign'
import Api from '../Api'

describe('EmailCampaign', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<EmailCampaign />)  
  })
  
  describe('render', () => {
    it('renders <Recipient> <EmailCampaignForm> and <EmailCampaignPreview>', () => {
      const recipients = wrapper.find('[data-test="recipients-component"]')
      const form = wrapper.find('[data-test="email-campaign-form-component"]')
      const preview = wrapper.find('[data-test="email-campaign-preview-component"]')
      
      expect(recipients).toHaveLength(1);
      expect(form).toHaveLength(1);
      expect(preview).toHaveLength(1);
    })
  })

  describe('sendEmail()', () => {
    it('Calls API.sendEmail() with a payload', () => {
      const apiSpy = jest
        .spyOn(Api, 'sendEmail')
        .mockResolvedValue({ success: 'mocked success' })

      const btn = wrapper.find('[data-test="send-emails-btn"]')
      btn.simulate('click', { preventDefault: () => {} })
        
      expect(apiSpy).toHaveBeenCalledWith(
        expect.objectContaining({
          campaign: expect.any(Object),
          recipients: expect.any(Array)
        })
      )
    })

    it('catches any api error', () => {
      jest
        .spyOn(Api, 'sendEmail')
        .mockRejectedValue({ failure: 'mocked failure' })

      const btn = wrapper.find('[data-test="send-emails-btn"]')

      expect(
        () => btn.simulate('click', { preventDefault: () => {} })
      ).not.toThrow()      
    })
  })

  describe('handleEvents Callbacks', () => {

    describe('recipients callbacks', () => {
      it.skip('handles handleAddRecipient', () => {})
      it.skip('handles handleDeleteRecipient', () => {})
      it.skip('handles handleEditRecipient', () => {})
    })

    describe('emailForm callbacks', () => {
      it.skip('handles handleCampaignInput', () => {})
    })
  })
})