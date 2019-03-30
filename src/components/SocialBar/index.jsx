import React from "react";

import { Icon } from "../Icon";
import "./index.module.scss";

export const SocialBar = () => (
  <div styleName="social">
    <ul>
      <li>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon={["fab", "instagram"]} iconColor="grayscale-2" size="sm" />
        </a>
      </li>
      {/* <li>
        <a href="" target="_blank">
          <Icon
            icon={["fab", "facebook-square"]}
            iconColor="grayscale-2"
            size="sm"
          />
        </a>
      </li> */}
      <li>
        <a href="" target="_blank">
          <Icon icon={["fab", "pinterest"]} iconColor="grayscale-2" size="sm" />
        </a>
      </li>
      {/* <li>
        <a href="" target="_blank">
          <Icon
            icon={["fab", "linkedin"]}
            iconColor="grayscale-2"
            size="sm"
          />
        </a>
      </li> */}
    </ul>
  </div>
);
