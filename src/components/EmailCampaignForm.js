import React from 'react'
import '../assets/styles/email-form.scss'

class EmailCampaignForm extends React.Component {
  handleCampaignInput = (field, value) => {
    this.props.onCampaignInput(field, value)
  }
  
  render () {
    return (
      <div className="email-form-container">
        <h3 className="title">Campaign Details</h3>

        {/* Campaign Name */}
        <div className="form-group">
          <label htmlFor="name">Campaign Name</label>
          <input
            id="name"
            type="text"
            placeholder="Email Campaign Name"
            onChange={(e) => this.props.onCampaignInput('name', e.target.value) }
            value={this.props.name} />
        </div>

        {/* Email Campaign Description */}
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            id="subject"
            type="text"
            placeholder="Email Subject"
            onChange={ (e) => this.handleCampaignInput('subject', e.target.value) }
            value={this.props.subject} />
        </div>

        {/* Email Campaign Description */}
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            placeholder="Email Campaign Description"
            onChange={ (e) => this.handleCampaignInput('description', e.target.value) }
            value={this.props.description} />
        </div>

        {/* Email Sender */}
        <div className="form-group">
          <label htmlFor="sender">Email Sender</label>
          <input
            id="sender"
            type="text"
            placeholder="do-not-reply@example.com"
            onChange={ (e) => this.handleCampaignInput('sender', e.target.value) }
            value={this.props.sender} />
        </div>

        {/* Email Campaign Discount Rate */}
        <div className="form-group">
          <label htmlFor="discount_rate">Discount Rate</label>
          <input
            id="discount_rate"
            type="text"
            placeholder="Discount Rate"
            onChange={ (e) => this.handleCampaignInput('discountRate', e.target.value) }
            value={this.props.discountRate} />
        </div>

        {/* Email Campaign Discount Code */}
        <div className="form-group">
          <label htmlFor="discount_code">Discount Code</label>
          <input
            id="discount_code"
            type="text"
            placeholder="Discount Code"
            onChange={ (e) => this.handleCampaignInput('discountCode', e.target.value) }
            value={this.props.discountCode} />
        </div>
      </div>
    )
  }
}

export default EmailCampaignForm
