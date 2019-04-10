import React from "react";
import PropTypes from "prop-types";

import FormHoneypot from "./FormHoneypot";

const FormNetlify = ({
  children,
  formName,
  action,
  includeHoneypot,
  includeCaptcha
}) =>
  action ? (
    <form
      name={formName}
      method="POST"
      action={action}
      dataNetlifyRecaptcha={includeCaptcha}
      dataNetlify="true"
    >
      {includeHoneypot && <FormHoneypot />}
      {children}
    </form>
  ) : (
    <form
      name={formName}
      method="POST"
      dataNetlifyRecaptcha={includeCaptcha}
      dataNetlify="true"
    >
      {includeHoneypot && <FormHoneypot />}
      {children}
    </form>
  );

FormNetlify.propTypes = {
  formName: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  action: PropTypes.func,
  includeHoneypot: PropTypes.bool,
  includeCaptcha: PropTypes.bool
};

FormNetlify.defaultProps = {
  includeHoneypot: true,
  includeCaptcha: false,
  action: null
};

export default FormNetlify;
