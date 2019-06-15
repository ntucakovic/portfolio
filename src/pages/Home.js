import React, { useState } from "react";
import actions from "../actions";
import HomeHeading from "../components/HomeHeading";
import HomeHobbies from "../components/HomeHobbies";
import HomeLinks from "../components/HomeLinks";
import { useAppDispatch, useAppState } from "../AppContext";

const Home = () => {
  // Initialize typed.js for hobbies after slogan is finished animating.
  const [headingAnimationCompleted, setHeadingAnimationCompleted] = useState(
    false
  );

  const state = useAppState();
  const dispatch = useAppDispatch();

  const handleMouseMove = event => {
    event.persist();
    dispatch({
      type: actions.APP_TRANSFORM.key,
      event
    });
  };

  return (
    <div
      className="flex-content-center full-viewport-min"
      onMouseMove={handleMouseMove}
    >
      <div style={state.transformStyles}>
        <article className="home">
          <HomeHeading onComplete={() => setHeadingAnimationCompleted(true)} />
          <HomeHobbies ready={headingAnimationCompleted} />
          <HomeLinks ready={headingAnimationCompleted} />
        </article>
      </div>
    </div>
  );
};

export default Home;
