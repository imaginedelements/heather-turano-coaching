import React from "react";
import { storiesOf } from "@storybook/react";
import base, { filename } from "paths.macro";
import colors from "../../../src/styles/scss/exports/index.scss";

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
  ));
