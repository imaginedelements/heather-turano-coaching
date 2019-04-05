import React, { Component } from "react";
import PropTypes from "prop-types";

import { Heading, Paragraph, Icon } from "../../../components/typography";

import "./index.module.scss";

class InteractiveCircleList extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      activeBubbleIndex: 0
    };
  }

  handleClick(index) {
    this.setState({
      activeBubbleIndex: index
    });
  }

  render() {
    const { activeBubbleIndex } = this.state;
    const { list } = this.props;

    return (
      <>
        <ul styleName="container">
          {list.map(({ title, icon, blurb }, i) => {
            const isActive = activeBubbleIndex === i;
            return (
              <li key={title} styleName="pillar">
                <button
                  styleName={`bubble ${isActive ? "active" : ""}`}
                  onClick={() => this.handleClick(i)}
                >
                  <Icon
                    icon={icon}
                    size="hmd"
                    position="center"
                    color="secondary-0"
                  />
                </button>
                <div styleName="blurb">
                  <Heading copy={title} size="subtitle" />
                  <Paragraph>{blurb}</Paragraph>
                </div>
              </li>
            );
          })}
        </ul>
        <div styleName="outsideBlurb">
          <Heading copy={list[activeBubbleIndex].title} size="subtitle" />
          <Paragraph>{list[activeBubbleIndex].blurb}</Paragraph>
        </div>
      </>
    );
  }
}

InteractiveCircleList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      blurb: PropTypes.string.isRequired
    })
  )
};

export default InteractiveCircleList;
