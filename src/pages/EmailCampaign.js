import React from 'react'
import EmailCampaignForm from '../components/EmailCampaignForm'
import EmailCampaignPreview from '../components/EmailCampaignPreview'
import Recipients from '../components/Recipients'
import Api from '../Api'

import '../assets/styles/email-campaign.scss'

class EmailCampaign extends React.Component {  
  constructor (props) {
    super(props)
    this.state = {
      campaign: {
        name: 'SimonData - End of Summer Shoe Sale',
        subject: 'Simon Data Sale: Lace up some new Shoes!',
        description: 'Take a walk in the Park with SimonData Shoes Summer discount promotion: 20% off all online purchases.  ',
        discountRate: 20,
        discountCode: 'SIMON_SHOES_20',
        sender: 'do-not-reply@simondata.com'
      },
      recipients: [
        {
          name: 'sammy samwell',
          email: 'sammy.samwell2020@mailinator.com'
        },
        {
          name: 'taylor talbot',
          email: 'taylor.talbot2020@mailinator.com'
        },
        {
          name: 'Alex Andersson',
          email: 'alex.andersson2020@mailinator.com'
        }
      ]
    }
  }
  
  handleEditRecipient = ({ name = '', email = '' } = {}) => {
    const recipients = this.state.recipients.filter(r => {
      return r.email !== email
    })
    
    this.setState({
      recipients,
      addRecipient: {
        name,
        email
      }
    })
  }

  handleDeleteRecipient = (email = '') => {
    const recipients = this.state.recipients.filter(r => {
      return r.email !== email
    })

    this.setState({ recipients })
  }

  handleAddRecipient = ({ name = '', email = '' } = {}) => {
    this.setState({
      recipients: [
        ...this.state.recipients,
        {
          name,
          email
        }
      ]
    })
  }

  handleCampaignInput = (field, value) => {
    if (['name', 'description', 'discountRate', 'discountCode', 'sender', 'subject'].includes(field)) {
      this.setState({
        campaign: {
          ...this.state.campaign,
          [field]: value
        }
      })
    } else {
      console.error('invalid field name => ', field)
    }
  }
  
  sendEmail = async (e) => {
    e.preventDefault()

    try {
      const response = await Api.sendEmail({
        recipients: this.state.recipients,
        campaign: this.state.campaign
      })

      console.log('success response => ', response)
    } catch (error) {
      console.error(error)
    }
  }
  
  render () {
    return (
      <div className="email-campaign-container">

        <div className="hero">
          <h2 className="title">Email Campaign</h2>
        </div>
      
        <div className="email-campaign-form-container">
          <Recipients
            recipients={this.state.recipients}
            onAddRecipient={this.handleAddRecipient}
            onEditRecipient={this.handleEditRecipient}
            onDeleteRecipient={this.handleDeleteRecipient}
            data-test="recipients-component" />

          <EmailCampaignForm 
            name={this.state.campaign.name}
            sender={this.state.campaign.sender}
            subject={this.state.campaign.subject}
            description={this.state.campaign.description}
            discountRate={this.state.campaign.discountRate}
            discountCode={this.state.campaign.discountCode}
            onCampaignInput={this.handleCampaignInput}
            data-test="email-campaign-form-component" />
        </div>

        <div className="preview-container">
          <EmailCampaignPreview
            recipients={this.state.recipients}
            name={this.state.campaign.name}
            subject={this.state.campaign.subject}
            description={this.state.campaign.description}
            discountRate={this.state.campaign.discountRate}
            discountCode={this.state.campaign.discountCode}
            sender={this.state.campaign.sender}
            data-test="email-campaign-preview-component" />
          {/* <EmailCampaignMobilePreview /> */}
        </div>

        {/* Send Emails to Customers */}
        <button className="send-email-button" onClick={this.sendEmail}
        data-test="send-emails-btn">Send Email</button>
      </div>
    )
  }
}

export default EmailCampaign
