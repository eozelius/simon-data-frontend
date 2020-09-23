# Ethan Ozelius SimonData Coding Challenge: Email Campaign
This React App is the Front end of an Email Campaign utility using SendGrid to send real emails.  This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Quick Start
```bash
Install dependencies
$ yarn install

Start App at localhost:3001
$ yarn start

Execute Unit Tests
$ yarn test

Lint
$ yarn lint

Build Production Bundle
$ yarn build
```

## Backend Connection
This React Front End makes axios requests to a Rails Backend to send emails.

## Components Organization
There are 3 main components that power this app.  The - ### <EmailCampaign>
- Root state - `this.state` contains all data to power this app.
- Renders other components: `<Recipients>` `<EmailCampaignForm>`, `<EmailCampaignPreview>`
- API - Makes API requests to send email Campaign

### <Recipients>
- Component to add edit and delete recipients.

### <EmailCampaignForm>
- Component to update Email Campaign Meta Data.
  - name
  - description
  - discount_rate
  - discount_code
  - sender email: **only my personal email** is authorized to send real emails, due to Sendgrid security policies.

## Follow up items
1. Unit Tests
  - Assert that EmailCampaign renders stubs of other components
  - API.js - mock axios.post() and assert success/error state

2. UX
  - isLoading
  - error/success handling - give user indication of whether emails failed or succeeded.
  - Mobile.  Mobile email views and previews need improvement.
  - Email Themes - User should be able to select a predefined themed template.
  - Email Images - User should be able to add images to email.
  - Security - Sending real emails should be gated by an authentication system.
