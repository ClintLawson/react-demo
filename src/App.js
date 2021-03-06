import React from 'react';
// import logo from './logo.svg';
import './App.css';

import AuthToDoApp from './components/AuthToDoApp/AuthToDoApp'
import * as msal from "@azure/msal-browser";
import { MsalProvider } from '@azure/msal-react';


const configuration = {
  auth: {
      clientId: "1877b32e-fba5-4a06-a0fd-6f867ba4ea01",
      authority: "https://login.microsoftonline.com/common",
      redirectUri: "https://happy-mushroom-083bfe40f.azurestaticapps.net/",
      // redirectUri: "http://localhost:3000",
  },
  cache: {
    cacheLocation: "localStorage", // This configures where your cache will be stored
    // storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
  // system:{
    // windowHashTimeout: 60000,
    // iframeHashTimeout: 6000,
    // loadFrameTimeout: 0,
    // asyncPopups: true
  // }
};

const pca = new msal.PublicClientApplication(configuration);


function App() {
  return (
    <div className={'wrapper'} >
      <MsalProvider instance={pca}>
        <AuthToDoApp />
      </MsalProvider>

    </div>
  );
}

export default App;
