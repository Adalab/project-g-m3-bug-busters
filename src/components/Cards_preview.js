import React from 'react';
import PropTypes from 'prop-types';

const imgPreviewStyle = {
  backgroundImage: "url('https://image.shutterstock.com/image-photo/palomino-horse-avelignese-haflinger-breed-260nw-1456529102.jpg')"
};



class CardsPreview extends React.Component{
  getHiddenClass(str) {
    return str ? '' : 'hidden';
  }
  render(){
    return(
      <section className="section1">
        <div className="section1__container">
          <button type="reset" className="section1__button button-reset js__button" form="form">
            <i className="far fa-trash-alt">&nbsp;&nbsp;</i>
            RESET
          </button>
          <div className={`section1__card theme-colors${this.props.paletteValue}`}>
            <div className="section1__card__title">
              <p className="section1__name js__title">
                {this.props.form_name}
              </p>
              <p className="section1__career js__job">
                {this.props.form_career}              
              </p>
            </div>
            <div 
              className="section1__image js__profile-image" style={imgPreviewStyle}
            >
              <img id="img" className="section1__image-img" alt="Nombre Apellido"/>
            </div>
            <ul className="section1__links">
              <li className="section1__element">
                <a className={`section1__link js__icon-mail mail ${this.props.email ? '' : 'hidden'}`} href={`mailto:${this.props.email}`}>
                  <i className="far fa-envelope section1__link__image"></i>
                </a>
              </li>
              <li className="section1__element">
                <a className={`section1__link js__icon-phone ${this.getHiddenClass(this.props.phone)}`} href={`tel:${this.props.phone}`}>
                  <i className="fas fa-mobile-alt section1__link__image"></i>
                </a>
              </li>
              <li className="section1__element">
                <a target="__blank" className={`section1__link js__icon-linkedin ${this.getHiddenClass(this.props.linkedin)}`} href={`https://www.linkedin.com/in/${this.props.linkedin}`}>
                  <i className="fab fa-linkedin-in section1__link__image"></i>
                </a>
              </li>
              <li className="section1__element">
                <a target="__blank" className={`section1__link js__icon-github ${this.getHiddenClass(this.props.github)}`} href={`https://github.com/${this.props.github}`}>
                  <i className="fab fa-github-alt section1__link__image"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

CardsPreview.propTypes = {
  form_name: PropTypes.string.isRequired,
  form_career: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
}

export default CardsPreview;