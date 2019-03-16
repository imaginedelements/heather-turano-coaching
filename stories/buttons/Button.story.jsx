import React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "@storybook/react/demo";
import base, { filename } from "paths.macro";

import { createStory } from "../index";
import notes from "./Button.notes.md";
import {} from "./Button.component.jsx";

storiesOf(createStory(base, filename), module)
  .add("with text", () => <Button>Hello Button</Button>, { notes })
  .add("with emoji", () => (
    <Button>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
