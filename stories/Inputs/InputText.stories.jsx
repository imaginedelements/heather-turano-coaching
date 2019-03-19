import React from "react";
import { storiesOf } from "@storybook/react";
import base, { filename } from "paths.macro";

import { createStory } from "../index";
import { InputText } from "../../src/components/Forms";

storiesOf(createStory(base, filename), module)
  .add("default", () => <InputText name="default" />)
  .add("with placeholder", () => (
    <InputText name="with-placeholder" placeholder="Input with placeholder" />
  ))
  .add("with value", () => (
    <InputText name="with-value" value="Input with value" />
  ))
  .add("with label", () => (
    <InputText name="with-label" label="Input with label" />
  ))
  .add("with label and placeholder", () => (
    <InputText
      name="with-label-and-placeholder"
      label="Input with label and placeholder"
      placeholder="placeholder"
    />
  ))
  .add("invalid with label", () => (
    <InputText
      name="invalid-with-label"
      label="This input is invalid"
      placeholder="placeholder"
      isValid={false}
    />
  ))
  .add("invalid with label and error message", () => (
    <InputText
      name="invalid-with-label-and-error-message"
      label="This input is invalid"
      placeholder="placeholder"
      isValid={false}
      errorMessage="Ohz noz! This is an invalid input"
    />
  ));
