import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import logo from '../img/logo.png';
import './all.sass'
import './index.module.css';

const TemplateWrapper = ({ children }) => (
  <div styleName="container">
    <Helmet title="Home | Heather Turano Coaching" bodyAttributes={{ class: ''}}/>
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
