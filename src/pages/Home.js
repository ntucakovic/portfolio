import React, { Component } from "react";
import Slogan from "../components/Slogan";
import { AppContext } from "../AppContext";
import { hobbies, links } from "../helpers/data";

class Home extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {({ handleMouseMove, appTransformStyle }) => (
          <div
            className="flex-content-center full-viewport-min"
            onMouseMove={handleMouseMove}
          >
            <Slogan
              appTransformStyle={appTransformStyle}
              hobbies={hobbies}
              links={links}
            />
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Home;
