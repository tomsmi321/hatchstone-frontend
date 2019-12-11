import React from 'react';
import { ExampleContext } from './contexts/ExampleContext';
import { LandingPage } from './components/LandingPage/LandingPage';
import { theme, MuiThemeProvider } from './uiKit/Theme'

function App() {
  return (
    // wrapping components in custom MuiThemeProvider to match Hatchstone style guide
    <MuiThemeProvider theme={theme}>
      {/* providing context values and wrapping components so they have access to the provided values */}
      <ExampleContext.Provider value={{exampleValue: "I am a context value"}}>
        <LandingPage />
      </ExampleContext.Provider>
    </MuiThemeProvider>
  );
}

export default App;
