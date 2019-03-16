---
name: Icon
menu: Typography
route: /typography/icon
---

import { Playground, PropsTable } from "docz";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faRocket as falRocket,
  faTvRetro as falTvRetro,
  faCheckCircle as falCheckCircle,
  faHome as falHome
} from "@fortawesome/pro-light-svg-icons";
import {
  faRocket as farRocket,
  faTvRetro as farTvRetro,
  faCheckCircle as farCheckCircle,
  faHome as farHome
} from "@fortawesome/pro-regular-svg-icons";
import {
  faRocket as fasRocket,
  faTvRetro as fasTvRetro,
  faCheckCircle as fasCheckCircle,
  faHome as fasHome
} from "@fortawesome/pro-solid-svg-icons";
import Props from "./index.props";
import Icon from "./";
library.add(
  falRocket,
  farRocket,
  fasRocket,
  falTvRetro,
  farTvRetro,
  fasTvRetro,
  falHome,
  farHome,
  fasHome,
  falCheckCircle,
  farCheckCircle,
  fasCheckCircle
);

# Icon

## Overview

### Assumptions

- In almost every situation that you use an icon, it probably should have some sort of text. It then made sense that the icon should be considered a typography component. It should subscribe to some of the same conventions that normal typography does so it can align in a scaled manner along with the text
- Each icon should then be named after the type of text that it is complimenting. Icons that go along with a `caption` should be of `caption` type; same with the other components. This method removes the ambiguity that a `xl` or a `lg` component might have an instead labels it with something that the developer can easily determine its height

## Installation

1. Request a font-awesome registry token from a project lead
2. Create an `.npmrc` file
3. Place the token inside of the file
4. Install the `font-awesome` dependencies

```shell
npm install @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons @fortawesome/pro-light-svg-icons @fortawesome/pro-regular-svg-icons @fortawesome/pro-solid-svg-icons @fortawesome/react-fontawesome
```

5. Create an `config.icons.js` configuration file inside of the `app-configs/` directory and include the components that you wish to add to the app using the library notation

```js
// src/app-configs/config.icons.js

import { library } from "@fortawesome/fontawesome-svg-core";

import { faCheckCircle as fasCheckCircle } from "@fortawesome/pro-solid-svg-icons";
import { faHome as falHome } from "@fortawesome/pro-light-svg-icons";

export configureIcons = () => {
  // solid
  library.add(fasCheckCircle);
  // light
  library.add(falHome);
}
```

6. Import the `configureIcons()` functions into the root of the application and call it

```jsx
// src/index.jsx

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";

import "Icons/favicon.ico";
import { store, history, configureIcons } from "AppConfigs";

import AppRoot from "./app";
import "./index.scss";

configureIcons();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <AppRoot />
    </Router>
  </Provider>,
  document.getElementById("root")
);
```

## Props

<PropsTable of={Props} />

## Component

### Heading

<Playground>
  <Icon icon="rocket" size="heading-main" style="standalone" />
  <Icon icon="rocket" size="heading-lg" style="standalone" />
  <Icon icon="rocket" size="heading-md" style="inline" />
  <Icon icon="rocket" size="heading-sm" style="inline" />
</Playground>

### Paragraph

<Playground>
  <Icon icon="home" size="paragraph-lg" style="functional" />
  <Icon icon="home" size="paragraph-sm" style="functional" />
</Playground>

### Captions

<Playground>
  <Icon icon="check-circle" size="caption-lg" style="inline" />
  <Icon icon="check-circle" size="caption-sm" style="inline" />
</Playground>

### Label

<Playground>
  <Icon icon="tv-retro" size="label-lg" />
  <Icon icon="tv-retro" size="label-md" />
  <Icon icon="tv-retro" size="label-sm" />
</Playground>
