import React from 'react';
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
import UploadFileWrapper from './components/DocumentsUpload/UploadFileWrapper';
// import contexts here
import { ExampleContext } from 'src/contexts/ExampleContext';
import UsersContextProvider from './contexts/UsersContext';

const App = () => {
  return (
    // wrapping components in custom MuiThemeProvider to match Hatchstone style guide
    <MuiThemeProvider theme={theme}>
      <NavBar />
        <Switch>
          <Route path='/ui-kit'>
            <UIKit />
          </Route>
          <Route exact path="/" component={LandingPage}/>
          <Route path="/log-in" component={LogInPage}/>
          <Route path="/sign-up" component={SignUpPage}/>
          <UsersContextProvider>
            <Route path="/create-profile" component={CreateProfilePage}/>
            <Route path ="/upload-documents" component={UploadFileWrapper} />
            <Route path="/edit-profile-admin/:id" component={EditProfileAdminPage} />
            <Route path="/approved-clients" component={ApprovedClientsPage}/>
            <Route path="/onboarding-clients" component={OnboardingClientsPage}/>
            <Route path="/conversations/:id" component={ConversationsPage}/>
            <Route path="/client-details/:userId" component={ClientDetailPage}/>
          </UsersContextProvider>
        </Switch>
      <Footer />
    </MuiThemeProvider>
  );
}

export default App;
