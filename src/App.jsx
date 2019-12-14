import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ExampleContext } from './contexts/ExampleContext';
import { LandingPage } from './components/LandingPage/LandingPage';
import { theme, MuiThemeProvider } from './uiKit/Theme'
import UIKit from './components/UIKit'

function App() {
  return (
    // wrapping components in custom MuiThemeProvider to match Hatchstone style guide
    <MuiThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path='/ui-kit'>
            <UIKit />
          </Route>
          <Route path="/">
            {/* providing context values and wrapping components so they have access to the provided values */}
            <ExampleContext.Provider value={{exampleValue: "I am a context value"}}>
              <LandingPage />
            </ExampleContext.Provider>
          </Route>
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
