import React from 'react';
import { ExampleContext } from './contexts/ExampleContext';
import { LandingPage } from './components/LandingPage/LandingPage'

function App() {
  return (
    // providing context values and wrapping components so they have access to the provided values
    <ExampleContext.Provider value={{exampleValue: "I am a context value"}}>
      <LandingPage />
    </ExampleContext.Provider>
  );
}

export default App;
