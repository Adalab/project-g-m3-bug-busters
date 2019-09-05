import React from 'react';

class LandingMain extends React.Component{
  render(){
    return(
      <main className="landing__main">
        <div className="landing__main-container">
          <h2 className="landing__main-title">
            Crea tu tarjeta de visita
          </h2>
          <p className="landing__main-text">
            Crea mejores contactos profesionales de forma fácil y cómoda
          </p>
          <ul className="landing__main-list">
            <li className="landing__main-item main-item1"> 
              <i className="far fa-object-ungroup landing__list-iconDesign"></i>
              <p className="landing__main-description">
                Diseña
              </p>
            </li>
            <li className="landing__main-item main-item2"> 
              <i className="far fa-keyboard landing__list-iconFill"></i>
              <p className="landing__main-description">
                Rellena
              </p>
            </li>
            <li className="landing__main-item main-item3"> 
              <i className="fas fa-share-alt landing__list-iconShare"></i>
              <p className="landing__main-description">
                Comparte
              </p>
            </li>
          </ul>
        </div>
        <div className="landing__main-startButton"> 
          <a href="cards.html" className="landing__main-start">
            Comenzar
          </a>
        </div>
    </main>
    );
  }
}

export default LandingMain;