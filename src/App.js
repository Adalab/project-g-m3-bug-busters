import React from 'react';
import './scss/main.scss';
import logo from './images/logo-adalab.png';

import LandingHeader from './components/Landing_header';
import LandingMain from './components/Landing_main';
import LandingFooter from './components/Landing_footer';
// import awesomeLogo from './images/logo.svg';

function App() {
  return (
    <div className="page page-landing">
      <div className="page__flex">
        <LandingHeader />
        <LandingMain />
      </div>
      <LandingFooter />
    </div>
  );
}
    
export default App;
