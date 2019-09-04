import React from 'react';
import './scss/main.scss';
import logo from './images/logo-adalab.png';
import LandingHeader from './components/Landing_header'
// import awesomeLogo from './images/logo.svg';

function App() {
  return (
    <div className="page page-landing">
      <div className="page__flex">
        <LandingHeader />
        <main className="landing__main">
          <div className="landing__main-container">
            <h2 className="landing__main-title">Crea tu tarjeta de visita</h2>
            <p className="landing__main-text">Crea mejores contactos profesionales de forma fácil y cómoda</p>
            <ul className="landing__main-list">
              <li className="landing__main-item main-item1"> <i className="far fa-object-ungroup landing__list-iconDesign"></i>
                <p className="landing__main-description">Diseña</p>
              </li>
              <li className="landing__main-item main-item2"> <i className="far fa-keyboard landing__list-iconFill"></i>
                <p className="landing__main-description">Rellena</p>
              </li>
              <li className="landing__main-item main-item3"> <i className="fas fa-share-alt landing__list-iconShare"></i>
                <p className="landing__main-description">Comparte</p>
              </li>
            </ul>
          </div>
          <div className="landing__main-startButton"> <a href="cards.html" className="landing__main-start">Comenzar</a>
          </div>
        </main>
      </div>

      <footer className="footer">
        <p className="footer__copyright">Awesome profile-cards @2018</p>
        <div className="footer__logo">
          <a href="https://adalab.es/" target="__blank" className="footer__logo">
            <img src= {logo} alt="Logo Adalab" className="footer__logo-adalab"/>
          </a>
        </div>
      </footer>
    </div>
  );
}
    
export default App;
