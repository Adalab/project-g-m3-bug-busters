import React from 'react';
import logo from '../images/logo-adalab.png';

class LandingFooter extends React.Component{
  render(){
    return(
      <footer className="footer">
        <p className="footer__copyright">Awesome profile-cards @2018</p>
        <div className="footer__logo">
          <a href="https://adalab.es/" target="__blank" className="footer__logo">
            <img src= {logo} alt="Logo Adalab" className="footer__logo-adalab"/>
          </a>
        </div>
      </footer>
    );
  }
}

export default LandingFooter;