import React from 'react';
import AuthContextProvider from './contexts/AuthContext'
import { Switch, Route } from "react-router-dom";
import { ExampleContext } from 'src/contexts/ExampleContext';
import { LandingPage } from 'components/LandingPage/LandingPage';
import LogInPage from 'components/LogIn';
import SignUpPage from 'components/SignUp/SignUp';
import CreateProfilePage from 'components/SignUp/CreateProfile';
import ApprovedClientsPage from 'components/ApprovedClients'
import ConversationsPage from 'components/Conversations';
import ClientDetailPage from 'components/ClientDetails';
import OnboardingClientsPage from 'components/OnboardingClients';
import EditProfileAdminPage from 'components/EditProfileAdmin';
import { theme, MuiThemeProvider } from 'uiKit/Theme'
import UIKit from 'components/UIKit'
import NavBar from 'uiKit/navbars/AppNav';
import { Footer } from 'uiKit/Footer';

const App = () => {
  return (
    // wrapping components in custom MuiThemeProvider to match Hatchstone style guide
    <MuiThemeProvider theme={theme}>
      <NavBar />
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
          <AuthContextProvider>
            <Route path="/log-in" component={LogInPage}/>
            <Route path="/sign-up" component={SignUpPage}/>
            <Route path="/create-profile" component={CreateProfilePage}/>
            <Route path="/edit-profile-admin/:id" component={EditProfileAdminPage} />
            <Route path="/approved-clients" component={ApprovedClientsPage}/>
            <Route path="/onboarding-clients" component={OnboardingClientsPage}/>
            <Route path="/conversations/:id" component={ConversationsPage}/>
            <Route path="/client-details/:userId" component={ClientDetailPage}/>
          </AuthContextProvider>
        </Switch>
      <Footer />
    </MuiThemeProvider>
  );
}

export default App;
