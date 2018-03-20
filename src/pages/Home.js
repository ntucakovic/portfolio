import React, {Component} from 'react';
import Slogan from '../components/Slogan';
import { AppContext } from '../components/AppContext';

class Home extends Component {
  render () {
    return (
      <AppContext.Consumer>
        {(context) => (
          <div className='flex-content-center full-viewport-min' onMouseMove={context.handleMouseMove}>
            <Slogan ref={instance => { this.child = instance; }} />
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Home;
