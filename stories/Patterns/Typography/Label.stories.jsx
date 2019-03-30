import React from "react";
import { storiesOf } from "@storybook/react";
import base, { filename } from "paths.macro";

import { Label } from "../../../src/components/typography";

import { createStory } from "../../index";

storiesOf(createStory(base, filename), module)
  .add("all sizes", () => (
    <>
      <Label size="xl">Label xl</Label>
      <Label size="lg">Label lg</Label>
      <Label size="md">Label md</Label>
      <Label size="sm">Label sm</Label>
      <Label size="xs">Label xs</Label>
    </>
  ))
  .add("size - xl", () => <Label size="xl">Label xl</Label>)
  .add("size - lg", () => <Label size="lg">Label lg</Label>)
  .add("size - md", () => <Label size="md">Label md</Label>)
  .add("size - sm", () => <Label size="sm">Label sm</Label>)
  .add("using copy prop", () => <Label size="xs">Label xs</Label>);
