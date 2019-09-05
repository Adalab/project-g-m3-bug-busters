import React from 'react';
import LandingHeader from './Landing_header';
import LandingMain from './Landing_main';
import Footer from './Footer';

class Landing extends React.Component {
  render() {
    return (
      <div className="page page-landing">
        <div className="page__flex">
          <LandingHeader />
          <LandingMain />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Landing;