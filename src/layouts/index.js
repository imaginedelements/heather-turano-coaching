import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import logo from '../img/logo.png';
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Heather Turano Coaching" />
    <img
      src={logo}
      alt="under construction - heather turano coaching logo"
    />
    {/* <Navbar /> */}
    {/* <div>{children()}</div> */}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
