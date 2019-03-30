import React from "react";
import { storiesOf } from "@storybook/react";
import base, { filename } from "paths.macro";

import Icon from "@bit/cadent.components.typography.icon";

import { createStory } from "../../index";
import notes from "./readme.md";

storiesOf(createStory(base, filename), module)
  .addParameters({
    notes
  })
  .add("all sizes", () => (
    <>
      <Icon icon="rocket" size="heading-xl" />
      <Icon icon="rocket" size="heading-lg" />
      <Icon icon="rocket" size="heading-md" />
      <Icon icon="rocket" size="heading-sm" />
      <Icon icon="rocket" size="xl" />
      <Icon icon="rocket" size="lg" />
      <Icon icon="rocket" size="md" />
      <Icon icon="rocket" size="sm" />
      <Icon icon="rocket" size="xs" />
    </>
  ))
  .add("size - xl", () => <Icon icon="rocket" size="xl" />)
  .add("size - lg", () => <Icon icon="rocket" size="lg" />)
  .add("size - md", () => <Icon icon="rocket" size="md" />)
  .add("size - sm", () => <Icon icon="rocket" size="sm" />)
  .add("size - xs", () => <Icon icon="rocket" size="xs" />);
