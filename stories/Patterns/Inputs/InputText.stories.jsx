import React from "react";
import { storiesOf } from "@storybook/react";
import base, { filename } from "paths.macro";

import { createStory } from "../../index";
import { InputText } from "../../../src/components/Forms";

storiesOf(createStory(base, filename), module)
  .add("default", () => <InputText name="default" />)
  .add("primary - w/ placeholder", () => (
    <InputText name="with-placeholder" placeholder="Input with placeholder" />
  ))
  .add("primary - w/ value", () => (
    <InputText name="with-value" value="Input with value" />
  ))
  .add("primary - w/ label", () => (
    <InputText name="with-label" label="Input with label" />
  ))
  .add("primary - w/ label & placeholder", () => (
    <InputText
      name="with-label-and-placeholder"
      label="Input with label and placeholder"
      placeholder="placeholder"
    />
  ))
  .add("primary - invalid w/ label", () => (
    <InputText
      name="invalid-with-label"
      label="This input is invalid"
      placeholder="placeholder"
      isValid={false}
    />
  ))
  .add("primary - invalid w/ label & error message", () => (
    <InputText
      name="invalid-with-label-and-error-message"
      label="This input is invalid"
      placeholder="placeholder"
      isValid={false}
      errorMessage="Ohz noz! This is an invalid input"
    />
  ))
  .add("secondary - w/ placeholder", () => (
    <InputText
      styleType="secondary"
      name="with-placeholder"
      placeholder="Input with placeholder"
    />, {
      backgrounds: [{
        name: "contrast", value: 
      }]
    }
  ))
  .add("secondary - w/ value", () => (
    <InputText
      styleType="secondary"
      name="with-value"
      value="Input with value"
    />, {
      backgrounds: [{
        name: "contrast", value: 
      }]
    }
  ))
  .add("secondary - w/ label", () => (
    <InputText
      styleType="secondary"
      name="with-label"
      label="Input with label"
    />, {
      backgrounds: [{
        name: "contrast", value: 
      }]
    }
  ))
  .add("secondary - w/ label & placeholder", () => (
    <InputText
      styleType="secondary"
      name="with-label-and-placeholder"
      label="Input with label and placeholder"
      placeholder="placeholder"
    />, {
      backgrounds: [{
        name: "contrast", value: 
      }]
    }
  ))
  .add("secondary - invalid w/ label", () => (
    <InputText
      styleType="secondary"
      name="invalid-with-label"
      label="This input is invalid"
      placeholder="placeholder"
      isValid={false}
    />, {
      backgrounds: [{
        name: "contrast", value: 
      }]
    }
  ))
  .add("secondary - invalid w/ label & error message", () => (
    <InputText
      styleType="secondary"
      name="invalid-with-label-and-error-message"
      label="This input is invalid"
      placeholder="placeholder"
      isValid={false}
      errorMessage="Ohz noz! This is an invalid input"
    />, {
      backgrounds: [{
        name: "contrast", value: 
      }]
    }
  ));
