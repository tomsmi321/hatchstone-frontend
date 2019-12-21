import React from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom";
import { ExampleContext } from './contexts/ExampleContext';
import { LandingPage } from './components/LandingPage/LandingPage';
import LogInPage from './components/LogIn';
import { theme, MuiThemeProvider } from './uiKit/Theme'
import UIKit from './components/UIKit'
import NavBar from './uiKit/navbars/appNav';
import { Footer } from './uiKit/Footer';

const App = () => {
  const { pathname } = useLocation()
  console.log('IN APP', pathname)
  return (
    // wrapping components in custom MuiThemeProvider to match Hatchstone style guide
    <MuiThemeProvider theme={theme}>
      <NavBar />
      <Router>
        <Switch>
          <Route path='/ui-kit'>
            <UIKit />
          </Route>
          <Route exact path="/">
            {/* providing context values and wrapping components so they have access to the provided values */}
            <ExampleContext.Provider value={{exampleValue: "I am a context value"}}>
              <LandingPage />
            </ExampleContext.Provider>
          </Route>
          <Route path="/log-in" component={LogInPage}/>
          <Route path="/sign-up" component={() => <div>SIGN UP</div>}/>
        </Switch>
      </Router>
      <Footer />
    </MuiThemeProvider>
  );
}

export default App;
