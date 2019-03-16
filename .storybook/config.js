import { configure, addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

addDecorator(
  withInfo({
    header: true,
    source: true
  })
);

function loadStories() {
  const req = require.context("../stories", true, /\.story\.jsx$/);
  console.log(req);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
