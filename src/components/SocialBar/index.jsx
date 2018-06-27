import React from "react";
// import PropTypes from 'prop-types';

import { Icon } from "../Icon";
import styles from "./index.module.scss";

export const SocialBar = () => (
  <div styleName="social">
    <ul>
      <li>
        <a href="" target="_blank">
          <Icon
            icon={["fab", "instagram"]}
            iconColor="grayscale-2"
            iconSize="sm"
          />
        </a>
      </li>
      {/* <li>
        <a href="" target="_blank">
          <Icon
            icon={["fab", "facebook-square"]}
            iconColor="grayscale-2"
            iconSize="sm"
          />
        </a>
      </li> */}
      <li>
        <a href="" target="_blank">
          <Icon
            icon={["fab", "pinterest"]}
            iconColor="grayscale-2"
            iconSize="sm"
          />
        </a>
      </li>
      {/* <li>
        <a href="" target="_blank">
          <Icon
            icon={["fab", "linkedin"]}
            iconColor="grayscale-2"
            iconSize="sm"
          />
        </a>
      </li> */}
    </ul>
  </div>
);
