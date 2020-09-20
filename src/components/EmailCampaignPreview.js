import React from 'react'
import '../assets/styles/email-preview.scss'

export default function EmailCampaignPreview (props) {
  const recipientsList = props.recipients.map((r, index) => {
    return (
      <div className="preview-recipient" key={index}>
        <p>{r.email}</p>
      </div>
    )
  })

  return (
    <div className="email-preview-container">
      <h3 className="title">Email Preview</h3>

      <div className="email-preview">
        {/* Email List of Invitees/Recipients */}
        <div className="recipient-list-container">
          <p className="to-from"><span>to:</span> </p>
          { recipientsList }
        </div>

        {/* Email Sender Field */}
        <div className="sender-container">
          <p className="to-from">
            <span>from:</span> {props.sender}
          </p>
        </div>

        {/* Email Subject Field */}
        <div className="subject-container">
          <p className="to-from" ><span>Subject:</span> {props.subject}</p>
        </div>

        {/* Name */}
        <h3 className="preview-title">{props.name}</h3>

        {/* Description */}
        <p className="preview-description">{props.description}</p>

        {/* Discount Rate and Code */}
        <p className="preview-discount">
          Use code <span className="emphasized">{props.discountCode}</span>
          to receive <span className="emphasized">{props.discountRate}%</span> Off!
        </p>
      </div>
    </div>
  )
}