import React from 'react';
import AuthContextProvider from './contexts/AuthContext'
import { Switch, Route } from "react-router-dom";
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
      <AuthContextProvider>
        <NavBar />
          <Switch>
            <Route path='/ui-kit'>
              <UIKit />
            </Route>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route path="/log-in" component={LogInPage}/>
            <Route path="/sign-up" component={SignUpPage}/>
            <Route path="/create-profile" component={CreateProfilePage}/>
            <Route path="/edit-profile-admin/:id" component={EditProfileAdminPage} />
            <Route path="/approved-clients" component={ApprovedClientsPage}/>
            <Route path="/onboarding-clients" component={OnboardingClientsPage}/>
            <Route path="/conversations/:id" component={ConversationsPage}/>
            <Route path="/client-details/:userId" component={ClientDetailPage}/>
          </Switch>
        <Footer />
      </AuthContextProvider>
    </MuiThemeProvider>
  );
}

export default App;
