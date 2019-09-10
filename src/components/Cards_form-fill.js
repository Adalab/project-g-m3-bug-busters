import React from 'react';
import PropTypes from 'prop-types';

class CardsFormFill extends React.Component {
  getCollapsableClass(str) {
    return str ? '' : 'collapsable-container';
  }
  render() {
    const inputAction = this.props.inputAction;
    return (
      <fieldset className="form__fieldset collapsed" onClick={this.props.divAction} id="second">
        <legend className="form__fielset-legend">
          Completar información
          </legend>
        <div className="form__fill js__collapsable" >
          <h2 className="form__fill-title form-title title-2">rellena</h2>
        </div>
        <div className={`form__fill-content fill-container ${this.getCollapsableClass(this.props.collapsable)}`} data-id = "second">
          <div className="form__fill-input">
            <label htmlFor="form_name" className="form-label">nombre completo</label>
            <input
              type="text"
              className="form-text js__form-name"
              id="form_name"
              name="name"
              placeholder="Ej: Sally Jill"
              required
              onChange = {inputAction}
            />
          </div>
          <div className="form__fill-input">
            <label htmlFor="form_career" className="form-label">puesto</label>
            <input
              type="text"
              className="form-text js__form-job"
              id="form_career"
              name="job"
              placeholder="Ej: Front-end unicorn"
              required
              onChange = {inputAction}
            />
          </div>
          <div className="form__ill-input">
            <label htmlFor="form_photo" className="form-label">imagen de perfil</label>
            <input
              type="file"
              className="form-text form-file hidden js__profile-upload-btn"
              id="form_photo"
              name="photo"
              required
              onChange = {inputAction}
            />
            <button className="form-photo-button button-addImage js__profile-trigger">
              Añadir imagen
            </button>
            <div className="form-photo-preview js__profile-preview"></div>
          </div>
          <div className="form__fill-input">
            <label htmlFor="form_email" className="form-label">Email</label>
            <input
              type="email"
              className="form-text js__form-mail"
              id="form_email"
              name="email"
              placeholder="Ej: sally.hill@gmail.com"
              required
              onChange = {inputAction}
            />
          </div>
          <div className="form__fill-input">
            <label htmlFor="form_tel" className="form-label">Teléfono</label>
            <input
              type="tel"
              className="form-text js__form-phone"
              id="form_tel"
              name="phone"
              placeholder="Ej: 555-55-55-55"
              onChange = {inputAction}
            />
          </div>
          <div className="form__fill-input">
            <label htmlFor="form_linkedin" className="form-label">linkedIn</label>
            <input
              type="text"
              className="form-text js__form-linkedin"
              id="form_linkedin"
              name="linkedin"
              placeholder="Ej: @sally-hill"
              required
              onChange = {inputAction}
            />
          </div>
          <div className="form__fill-input">
            <label htmlFor="form_github" className="form-label">Github</label>
            <input
              type="text"
              className="form-text js__form-github"
              id="form_github"
              name="github"
              placeholder="Ej: @sally-hill"
              required
              onChange = {inputAction}
            />
          </div>
        </div>
      </fieldset>
      )
    }
  }

  CardsFormFill.propTypes ={
		inputAction : PropTypes.func.isRequired,
  }
  
  export default CardsFormFill;