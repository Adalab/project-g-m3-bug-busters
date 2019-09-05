import React from 'react';

class CardsPreview extends React.Component{
  render(){
    return(
      <section1 className="section1">
        <div className="section1__container">
          <button type="reset" className="section1__button button-reset js__button" form="form">
            <i className="far fa-trash-alt"></i> RESET
          </button>
          <div className="section1__card">
            <div className="section1__card__title">
              <p className="section1__name js__title">Nombre Apellido</p>
              <p className="section1__career js__job">Front-end developer</p>
            </div>
            <div 
              // className="section1__image js__profile-image" style="background-image: url()"
            >
              <img id="img" className="section1__image-img" alt="Nombre Apellido"/>
            </div>
            <ul className="section1__links">
              <li className="section1__element">
                <a className="section1__link js__icon-mail hidden">
                  <i className="far fa-envelope section1__link__image"></i>
                </a>
              </li>
              <li className="section1__element">
                <a className="section1__link js__icon-phone hidden">
                  <i className="fas fa-mobile-alt section1__link__image"></i>
                </a>
              </li>
              <li className="section1__element">
                <a target="__blank" className="section1__link js__icon-linkedin hidden">
                  <i className="fab fa-linkedin-in section1__link__image"></i>
                </a>
              </li>
              <li className="section1__element">
                <a target="__blank" className="section1__link js__icon-github hidden">
                  <i className="fab fa-github-alt section1__link__image"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section1>
    );
  }
}

export default CardsPreview;