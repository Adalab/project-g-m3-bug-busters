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
          <div className={`section1__card theme-colors${this.props.previewData.paletteValue}`}>
            <div className="section1__card__title">
              <p className="section1__name js__title">
                {this.props.previewData.name === '' ? 'Horse Luis Palomino' : this.props.previewData.name}
              </p>
              <p className="section1__career js__job">
                {this.props.previewData.career === '' ? 'Front-pony developer' : this.props.previewData.career}              
              </p>
            </div>
            <div 
              className="section1__image js__profile-image" style={imgPreviewStyle}
            >
              <img id="img" className="section1__image-img" alt="Nombre Apellido"/>
            </div>
            <ul className="section1__links">
              <li className="section1__element">
                <a className={`section1__link js__icon-mail mail ${this.props.previewData.email ? '' : 'hidden'}`} href={`mailto:${this.props.previewData.email}`}>
                  <i className="far fa-envelope section1__link__image"></i>
                </a>
              </li>
              <li className="section1__element">
                <a className={`section1__link js__icon-phone ${this.getHiddenClass(this.props.previewData.phone)}`} href={`tel:${this.props.previewData.phone}`}>
                  <i className="fas fa-mobile-alt section1__link__image"></i>
                </a>
              </li>
              <li className="section1__element">
                <a target="__blank" className={`section1__link js__icon-linkedin ${this.getHiddenClass(this.props.previewData.linkedin)}`} href={`https://www.linkedin.com/in/${this.props.previewData.linkedin}`}>
                  <i className="fab fa-linkedin-in section1__link__image"></i>
                </a>
              </li>
              <li className="section1__element">
                <a target="__blank" className={`section1__link js__icon-github ${this.getHiddenClass(this.props.previewData.github)}`} href={`https://github.com/${this.props.previewData.github}`}>
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
/*   form_name: PropTypes.string.isRequired,
  form_career: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired, */
  previewData: PropTypes.object.isRequired
}

export default CardsPreview;