import React from 'react'
import '../assets/styles/recipient.scss'

export default class Recipients extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      name: 'Morgan McCarthy',
      email: 'morgan.mccarthy2020@mailinator.com'
    }
  }

  handleInputChange = (field, value) => {
    this.setState({ [field]: value })
  }

  handleAddRecipient = () => {
    this.props.onAddRecipient({
      name: this.state.name,
      email: this.state.email
    })

    this.setState({
      name: '',
      email: ''
    })
  }

  handleEditRecipient = ({ name, email }) => {
    this.setState({
      name,
      email
    })

    this.props.onDeleteRecipient(email)
  }

  handleDeleteRecipient = (email) => {
    this.props.onDeleteRecipient(email)
  }

  render () {
    const recipients = this.props.recipients.map((r, index) => {
      return (
        <div className="recipient" key={index}>
          <div className="r-name">
            <p>{ r.name }</p>
          </div>

          <div className="r-email">
            <p>{ r.email }</p>
          </div>

          <div className="edit-or-delete">
            <p>
              <span onClick={() => this.handleEditRecipient({ name: r.name, email: r.email })}>edit </span>
              <span onClick={() => this.handleDeleteRecipient(r.email)} className="danger">delete</span>
            </p>
          </div>
        </div>
      )
    })
    
    return (
      <div className="recipients-container">
        <h3 className="title">Recipients</h3>

        {/* New Recipient Form */}
        <div className="recipients-form-container">
          {/* Name */}
          <div className="name">
            <div className="form-group">
              <label htmlFor="recipient_name">Name</label>
              <input
                id="recipient_name"
                type="text"
                placeholder="name"
                value={this.state.name}
                onChange={(e) => this.handleInputChange('name', e.target.value)} />
            </div>
          </div>

          {/* Email */}
          <div className="email">
            <div className="form-group">
              <label htmlFor="recipient_email">Email</label>
              <input
                id="recipient_email"
                type="text"
                placeholder="email"
                value={this.state.email}
                onChange={(e) => this.handleInputChange('email', e.target.value)} />
            </div>
          </div>

          {/* Add */}
          <div className="add-user">
            <button onClick={this.handleAddRecipient}>add recipient</button>
          </div>
        </div>

        {/* List of recipients */}
        <div className="list-of-recipients">
          { recipients }
        </div>
      </div>
    )
  }
}