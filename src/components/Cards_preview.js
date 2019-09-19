import React from 'react';
import PropTypes from 'prop-types';

class CardsPreview extends React.Component{
  constructor(props) {
    super(props);
    this.imgPreviewStyle = {
      backgroundImage: `url(${this.props.previewData.photo})`
    };
  }
  getHiddenClass(str) {
    return str ? '' : 'hidden';
  }

  render(){
    const imgPreviewStyle = {
      backgroundImage: `url(${this.props.previewData.photo})`
    };
    return(
      <section className="section1">
        <div>
          <button type="reset" className="button-reset" form="form"
						onClick={this.props.cleanData}>
            <i className="far fa-trash-alt">&nbsp;&nbsp;</i>
            RESET
          </button>
          <div className={`section1__card theme-colors${this.props.previewData.palette}`}>
            <div className="section1__card__title">
              <p className="section1__name">
                {(this.props.previewData.name) ? this.props.previewData.name : 'Horse Luis Palomino'}
              </p>
              <p className="section1__career">
                {this.props.previewData.job === '' ? 'Front-pony developer' : this.props.previewData.job}              
              </p>
            </div>
            <div 
              className="section1__image" style={imgPreviewStyle}
            >
              <img id="img" className="section1__image-img" alt="Nombre Apellido"/>
            </div>
            <ul className="section1__links">
              <li className="section1__element">
                <a className={`section1__link mail ${this.props.previewData.email ? '' : 'hidden'}`} href={`mailto:${this.props.previewData.email}`}>
                  <i className="far fa-envelope section1__link__image"></i>
                </a>
              </li>
              <li className="section1__element">
                <a className={`section1__link ${this.getHiddenClass(this.props.previewData.phone)}`} href={`tel:${this.props.previewData.tel}`}>
                  <i className="fas fa-mobile-alt section1__link__image"></i>
                </a>
              </li>
              <li className="section1__element">
                <a target="__blank" className={`section1__link ${this.getHiddenClass(this.props.previewData.linkedin)}`} href={`https://www.linkedin.com/in/${this.props.previewData.linkedin}`}>
                  <i className="fab fa-linkedin-in section1__link__image"></i>
                </a>
              </li>
              <li className="section1__element">
                <a target="__blank" className={`section1__link ${this.getHiddenClass(this.props.previewData.github)}`} href={`https://github.com/${this.props.previewData.github}`}>
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
	cleanData: PropTypes.func.isRequired,
  previewData: PropTypes.object.isRequired,
}

export default CardsPreview;