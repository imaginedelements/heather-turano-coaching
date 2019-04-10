import React from "react";
import PropTypes from "prop-types";

import FormHoneypot from "./FormHoneypot";

const FormNetlify = ({ children, formName, action, includeCaptcha }) =>
  action ? (
    <form
      name={formName}
      method="POST"
      action={action}
      data-netlify="true"
      netlify-honeypot="bot-field"
      data-netlify-recaptcha={includeCaptcha}
    >
      <FormHoneypot botFieldName="bot-field" />
      {children}
    </form>
  ) : (
    <form
      name={formName}
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      data-netlify-recaptcha={includeCaptcha}
    >
      <FormHoneypot botFieldName="bot-field" />
      {children}
    </form>
  );

FormNetlify.propTypes = {
  formName: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  action: PropTypes.func,
  includeCaptcha: PropTypes.bool
};

FormNetlify.defaultProps = {
  includeCaptcha: false,
  action: null
};

export default FormNetlify;
