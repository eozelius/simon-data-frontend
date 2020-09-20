import React from 'react'
// import { Link } from "react-router-dom"
// import { ROUTES } from '../constants'
import '../assets/styles/header.scss'

class Header extends React.Component {

  render () {
    return (
      <div className="header-container">
        <a href="/">
          <h4>Home</h4>
        </a>
      </div>
    )
  }
}

export default Header