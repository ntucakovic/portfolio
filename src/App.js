import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Logo from './Components/Logo';
import Router from './Router';
import './App.css';

class App extends Component {
  componentDidMount () {
    App.addBodyClass();
  }

  static addBodyClass () {
    let date = new Date();
    let theme = 'light';

    if (((date.getHours() < 6) || (date.getHours() > 18))) {
      theme = 'dark';
    }

    document.body.classList.add(theme);
  }

  render () {
    return (
      <BrowserRouter>
        <div className='app'>
          <Router />
          <Logo />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
