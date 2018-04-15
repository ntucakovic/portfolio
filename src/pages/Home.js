import React, { Component } from "react";
import Slogan from "../components/Slogan";
import { AppContext } from "../AppContext";

class Home extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {({ handleMouseMove }) => (
          <div
            className="flex-content-center full-viewport-min"
            onMouseMove={handleMouseMove}
          >
            <Slogan />
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Home;
