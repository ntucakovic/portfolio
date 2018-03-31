import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Router from './Router';
import { AppContext, AppProvider } from './AppContext';
import RepositoryLink from './components/RepositoryLink';
import Logo from './components/Logo';
import './App.css';

class App extends React.Component {
  render () {
    console.log(process.env);
    return (
      <AppProvider>
        <AppContext.Consumer>
          {({ theme, logo, repository }) => (
            <BrowserRouter>
              <div className={theme}>
                <div className='app'>
                  <Router />
                  <Logo {...logo} />
                  <RepositoryLink {...repository} />
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
