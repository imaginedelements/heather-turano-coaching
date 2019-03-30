import React from "react";
import { storiesOf, addParameters } from "@storybook/react";
import base, { filename } from "paths.macro";
import colors from "../../../src/styles/scss/exports/index.scss";

import { createStory } from "../../index";
import { InputText } from "../../../src/components/Forms";

storiesOf(createStory(base, filename), module)
  .addParameters({
    backgrounds: [
      { name: "lightscale-2", value: colors.lightscale_1, defaut: true }
    ]
  })
  .add("default", () => <InputText styleType="secondary" name="default" />)
  .add("secondary - w/ placeholder", () => (
    <InputText
      styleType="secondary"
      name="with-placeholder"
      placeholder="Input with placeholder"
    />
  ))
  .add("secondary - w/ value", () => (
    <InputText
      styleType="secondary"
      name="with-value"
      value="Input with value"
    />
  ))
  .add("secondary - w/ label", () => (
    <InputText
      styleType="secondary"
      name="with-label"
      label="Input with label"
    />
  ))
  .add("secondary - w/ label & placeholder", () => (
    <InputText
      styleType="secondary"
      name="with-label-and-placeholder"
      label="Input with label and placeholder"
      placeholder="placeholder"
    />
  ))
  .add("secondary - invalid w/ label", () => (
    <InputText
      styleType="secondary"
      name="invalid-with-label"
      label="This input is invalid"
      placeholder="placeholder"
      isValid={false}
    />
  ))
  .add("secondary - invalid w/ label & error message", () => (
    <InputText
      styleType="secondary"
      name="invalid-with-label-and-error-message"
      label="This input is invalid"
      placeholder="placeholder"
      isValid={false}
      errorMessage="Ohz noz! This is an invalid input"
    />
  ));
