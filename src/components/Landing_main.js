import React from 'react';
import {Link} from 'react-router-dom';


class LandingMain extends React.Component{
  render(){
    return(
      <main className="landing__main">
        <div>
          <h2 className="landing__main-title">
            Crea tu tarjeta de visita
          </h2>
          <p className="landing__main-text">
            Crea mejores contactos profesionales de forma fácil y cómoda
          </p>
          <ul className="landing__main-list">
            <li className="landing__main-item"> 
              <i className="far fa-object-ungroup landing__list-iconDesign"></i>
              <p className="landing__main-description">
                Diseña
              </p>
            </li>
            <li className="landing__main-item"> 
              <i className="far fa-keyboard landing__list-iconFill"></i>
              <p className="landing__main-description">
                Rellena
              </p>
            </li>
            <li className="landing__main-item"> 
              <i className="fas fa-share-alt landing__list-iconShare"></i>
              <p className="landing__main-description">
                Comparte
              </p>
            </li>
          </ul>
        </div>
        <div className="landing__main-startButton"> 
          <Link to="/Cards" className="landing__main-start">
            Comenzar
          </Link>
        </div>
    </main>
    );
  }
}

export default LandingMain;