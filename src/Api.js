import axios from 'axios'

const baseUrl = 'http://localhost:3000'

const Api = {
  sendEmail ({ recipients = [], campaign = {} } = {}) {
    const url = `${baseUrl}/send-email`

    return axios.post(url, {
      recipients,
      campaign: {
        name: campaign.name,
        description: campaign.description,
        subject: campaign.subject,
        sender: campaign.sender,
        discount_code: campaign.discountCode,
        discount_rate: campaign.discountRate
      }
    })
  },

  fetchEmailCampaigns () {
    const url = `${baseUrl}/email_campaigns`

    return axios.get(url)
  }
}

export default Api