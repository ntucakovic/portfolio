import React, { Component } from "react";
import withAppContext, {
  APP_CONTEXT_PROPS
} from "../containers/withAppContext";
import PropTypes from "prop-types";
import actions from "../actions";
import HomeHeading from "../components/HomeHeading";
import HomeHobbies from "../components/HomeHobbies";
import HomeLinks from "../components/HomeLinks";

class Home extends Component {
  state = {
    headingAnimationCompleted: false
  };

  /**
   * Initialize typed.js for hobbies after slogan is finished animating.
   */
  handleTypedSloganComplete = () => {
    this.setState({
      headingAnimationCompleted: true
    });
  };

  handleMouseMove = event => {
    this.props.dispatch({
      type: actions.APP_TRANSFORM.key,
      event
    });
  };

  render() {
    return (
      <div
        className="flex-content-center full-viewport-min"
        onMouseMove={this.handleMouseMove}
      >
        <div style={this.props.transformStyles}>
          <article className="home">
            <HomeHeading onComplete={this.handleTypedSloganComplete} />
            <HomeHobbies ready={this.state.headingAnimationCompleted} />
            <HomeLinks ready={this.state.headingAnimationCompleted} />
          </article>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  dispatch: PropTypes.func,
  transformStyles: PropTypes.shape({
    transform: PropTypes.string
  })
};

export default withAppContext(Home, [
  APP_CONTEXT_PROPS.dispatch,
  APP_CONTEXT_PROPS.transformStyles
]);
