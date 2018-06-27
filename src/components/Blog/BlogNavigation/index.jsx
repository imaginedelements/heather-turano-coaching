import React from "react";

import { Link } from "../../Link";
import { Icon } from "../../Icon";
import styles from "./index.module.scss";

export const BlogNavigation = () => (
  <footer styleName="blog-footer">
    <div styleName="link left">
      <Icon
        icon={["far", "long-arrow-left"]}
        iconSize="xs"
        iconColor="accent-0"
      />
      <Link to={"test"}>Newer</Link>
    </div>
    <div styleName="link right">
      <Link to={"test1"}>Older</Link>
      <Icon
        icon={["far", "long-arrow-right"]}
        iconSize="xs"
        iconColor="accent-0"
      />
    </div>
  </footer>
);
