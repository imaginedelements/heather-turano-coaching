import React from "react";
import { storiesOf } from "@storybook/react";
import base, { filename } from "paths.macro";

import { createStory } from "../index";
import { InputText } from "../../src/components/Forms";

storiesOf(createStory(base, filename), module)
  .add("default", () => <InputText name="default" />)
  .add("with placeholder", () => (
    <InputText name="with-placeholder" placeholder="Ridiculus Ligula Etiam" />
  ))
  .add("with value", () => (
    <InputText name="with-value" value="Commodo Parturient Sit Dolor" />
  ))
  .add("with placeholder & value", () => (
    <InputText
      name="with-value"
      placeholder="Ridiculus Ligula Etiam"
      value="Commodo Parturient Sit Dolor"
    />
  ));
