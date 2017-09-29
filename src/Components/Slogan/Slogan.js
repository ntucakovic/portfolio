import React, { Component } from 'react';

class Slogan extends Component {
  constructor (props) {
    super(props);
    this.test = 'test';
  }

  render () {
    return (
      <div>
        <header className="slogan">
          <h1>Frontend && Web Developer</h1>
          <p>With whole lotta love for Web Design and UI/UX</p>
        </header>
      </div>
    );
  }
}

export default Slogan;