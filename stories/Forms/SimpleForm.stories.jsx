import React from "react";
import { storiesOf } from "@storybook/react";
import base, { filename } from "paths.macro";

import { createStory } from "../index";
import { FormControl, Form, FormField } from "../../src/components/Forms";

storiesOf(createStory(base, filename), module)
  .add("1 field", () => (
    <FormControl initialValues={{ firstName: "" }}>
      <Form>
        <FormField type="text" name="firstName" />
      </Form>
    </FormControl>
  ))
  .add("2 fields", () => (
    <FormControl initialValues={{ firstName: "", lastName: "" }}>
      <Form>
        <FormField type="text" name="firstName" />
        <FormField type="text" name="lastName" />
      </Form>
    </FormControl>
  ))
  .add("3 fields", () => (
    <FormControl initialValues={{ firstName: "", lastName: "", address: "" }}>
      <Form>
        <FormField type="text" name="firstName" />
        <FormField type="text" name="lastName" />
        <FormField type="text" name="address" />
      </Form>
    </FormControl>
  ))
  .add("Initialized values", () => (
    <FormControl
      initialValues={{ firstName: "Tom", lastName: "Sawyer", address: "" }}
    >
      <Form>
        <FormField type="text" name="firstName" />
        <FormField type="text" name="lastName" />
        <FormField type="text" name="address" placeholder="The bayou?" />
      </Form>
    </FormControl>
  ));
