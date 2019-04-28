import React from "react";
import PropTypes from "prop-types";

import FormHoneypot from "./FormHoneypot";

const FormNetlify = ({ children, name, action, includeCaptcha }) =>
  action ? (
    <form
      name={name}
      method="POST"
      action={action}
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      data-netlify-recaptcha={includeCaptcha}
    >
      <input type="hidden" name="form-name" value={name} />
      <FormHoneypot botFieldName="bot-field" />
      {children}
    </form>
  ) : (
    <form
      name={name}
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
  name: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  action: PropTypes.func,
  includeCaptcha: PropTypes.bool
};

FormNetlify.defaultProps = {
  includeCaptcha: false,
  action: null
};

export default FormNetlify;
