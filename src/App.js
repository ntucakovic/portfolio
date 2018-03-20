import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Router from './Router';
import { AppContext, AppProvider } from './components/AppContext';
import RepositoryLink from './components/RepositoryLink';
import Logo from './components/Logo';
import './App.css';

class App extends React.Component {
  render () {
    return (
      <AppProvider>
        <AppContext.Consumer>
          {(context) => (
            <BrowserRouter>
              <div className={context.state.theme}>
                <div className='app'>
                  <Router />
                  <Logo {...context.logo} />
                  <RepositoryLink {...context.repository} />
                </div>
              </div>
            </BrowserRouter>
          )}
        </AppContext.Consumer>
      </AppProvider>
    );
  }
}

export default App;
