import React from "react";
import PropTypes from "prop-types";
import { ContactPageTemplate } from "../../templates/contact/contact.template";

const ContactPagePreview = ({ entry }) => (
  <ContactPageTemplate
    form={{
      title: entry.getIn(["data", "form", "title"]),
      description: entry.getIn(["data", "form", "description"]),
      fields: {
        firstName: entry.getIn(["data", "form", "fields", "firstName"]),
        lastName: entry.getIn(["data", "form", "fields", "lastName"]),
        emailAddress: entry.getIn(["data", "form", "fields", "emailAddress"]),
        natureOfContact: entry.getIn([
          "data",
          "form",
          "fields",
          "natureOfContact"
        ]),
        submit: entry.getIn(["data", "form", "fields", "submit"])
      }
    }}
    general={{
      title: entry.getIn(["data", "general", "title"]),
      description: entry.getIn(["data", "general", "description"]),
      emailAddress: {
        label: entry.getIn(["data", "general", "emailAddress", "label"]),
        emailLink: entry.getIn(["data", "general", "emailAddress", "emailLink"])
      }
    }}
  />
);

ContactPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }).isRequired
};

export default ContactPagePreview;
