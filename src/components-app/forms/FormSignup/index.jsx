import React from "react";
import PropTypes from "prop-types";

import {
  FormControl,
  Form,
  FormLayout,
  FormField
} from "../../../components/form-controls";
import { Button } from "../../../components/buttons";

const FormSignup = ({
  shouldDisplayFirstName,
  actionLabel,
  handleSubmit,
  layout,
  placeholder: { firstName: placeholderFirstName, email: placeholderEmail }
}) => (
  <FormControl
    initialValues={
      shouldDisplayFirstName ? { firstName: "", email: "" } : { email: "" }
    }
    onSubmit={(values, { setSubmitting }) => {
      setSubmitting(false);
      handleSubmit(values);
    }}
  >
    {({ isSubmitting, handleSubmit }) => (
      <Form>
        <FormLayout styleType={layout}>
          {shouldDisplayFirstName && (
            <FormField
              type="text"
              name="firstName"
              label={layout !== "inline" ? "First name" : null}
              placeholder={placeholderFirstName}
            />
          )}
          <FormField
            type="email"
            name="email"
            label={layout !== "inline" ? "Email" : null}
            placeholder={placeholderEmail}
          />
          <Button
            styleType="secondary"
            label={actionLabel}
            htmlType="submit"
            onSubmit={handleSubmit}
            loading={isSubmitting}
          />
        </FormLayout>
      </Form>
    )}
  </FormControl>
);

FormSignup.propTypes = {
  shouldDisplayFirstName: PropTypes.bool,
  actionLabel: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.shape({
    firstName: PropTypes.string,
    email: PropTypes.string
  }),
  layout: PropTypes.oneOf(["stacked", "inline"])
};

FormSignup.defaultProps = {
  shouldDisplayFirstName: false,
  placeholder: {
    firstName: "First name",
    email: "email@bomb.com"
  },
  layout: "stacked"
};

export default FormSignup;
