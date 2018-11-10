import React, { Component } from "react";
import Slogan from "../components/Slogan";
import { hobbies, links } from "../helpers/data";
import withAppContext, {
  APP_CONTEXT_PROPS
} from "../containers/withAppContext";
import PropTypes from "prop-types";
import actions from "../actions";

class Home extends Component {
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
        <Slogan
          transformStyles={this.props.transformStyles}
          hobbies={hobbies}
          links={links}
        />
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
