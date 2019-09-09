import React from 'react';
import PropTypes from 'prop-types';

class CardsFormFill extends React.Component {
  render() {
    return (
      <fieldset className="form__fieldset collapsed">
        <legend className="form__fielset-legend">
          Completar información
          </legend>
        <div className="form__fill js__collapsable">
          <h2 className="form__fill-title form-title title-2">{this.props.formFillTitle}</h2>
        </div>
        <div className="form__fill-content fill-container collapsable-container">
          <div className="form__fill-input">
            <label for="form-name" className="form-label">Nombre completo</label>
            <input
              type="text"
              className="form-text js__form-name"
              id="form-name"
              name="name"
              placeholder="Ej: Sally Jill"
              required
            />
          </div>
          <div className="form__fill-input">
            <label for="form-career" className="form-label">Puesto</label>
            <input
              type="text"
              className="form-text js__form-job"
              id="form-career"
              name="job"
              placeholder="Ej: Front-end unicorn"
              required
            />
          </div>
          <div className="form__fill-input">
            <label for="form-photo" className="form-label">Imagen de perfil</label>
            <input
              type="file"
              className="form-text form-file hidden js__profile-upload-btn"
              id="form-photo"
              name="photo"
              required
            />
            <button className="form-photo-button button-addImage js__profile-trigger">
              {this.props.fillImageBtn}
            </button>
            <div className="form-photo-preview js__profile-preview"></div>
          </div>
          <div className="form__fill-input">
            <label for="form-email" className="form-label">Email</label>
            <input
              type="email"
              className="form-text js__form-mail"
              id="form-email"
              name="email"
              placeholder="Ej: sally.hill@gmail.com"
              required
            />
          </div>
          <div className="form__fill-input">
            <label for="form-tel" className="form-label">Teléfono</label>
            <input
              type="tel"
              className="form-text js__form-phone"
              id="form-tel"
              name="phone"
              placeholder="Ej: 555-55-55-55"
            />
          </div>
          <div className="form__fill-input">
            <label for="form-linkedin" className="form-label">Linkedin</label>
            <input
              type="text"
              className="form-text js__form-linkedin"
              id="form-linkedin"
              name="linkedin"
              placeholder="Ej: @sally-hill"
              required
            />
          </div>
          <div className="form__fill-input">
            <label for="form-github" className="form-label">Github</label>
            <input
              type="text"
              className="form-text js__form-github"
              id="form-github"
              name="github"
              placeholder="Ej: @sally-hill"
              required
            />
          </div>
        </div>
      </fieldset>
      )
    }
  }

  CardsFormFill.propTypes ={
    formFillTitle: PropTypes.string.isRequired,
    fillImageBtn: PropTypes.string.isRequired,
  }
  
  export default CardsFormFill;