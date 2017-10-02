import React, {Component} from 'react';
import Slogan from '../../Components/Slogan';

class Home extends Component {
  render () {
    return (
      <div className='flex-content-center full-viewport-min' onMouseMove={(event) => this.child.updateSloganStyle(event)}>
        <Slogan ref={instance => { this.child = instance; }} />
      </div>
    );
  }
}

export default Home;
