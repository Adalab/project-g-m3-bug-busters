import React from 'react';
import PropTypes from 'prop-types';

class CardsFormFill extends React.Component {
  render() {
    const inputAction = this.props.inputAction;
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
            <label htmlFor="form_name" className="form-label">{this.props.formLabelName}</label>
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
            <label htmlFor="form-career" className="form-label">{this.props.formLabelJob}</label>
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
          <div className="form__fill-input">
            <label htmlFor="form-photo" className="form-label">{this.props.formLabelPhoto}</label>
            <input
              type="file"
              className="form-text form-file hidden js__profile-upload-btn"
              id="form-photo"
              name="photo"
              required
              onChange = {inputAction}
            />
            <button className="form-photo-button button-addImage js__profile-trigger">
              {this.props.fillImageBtn}
            </button>
            <div className="form-photo-preview js__profile-preview"></div>
          </div>
          <div className="form__fill-input">
            <label htmlFor="form-email" className="form-label">{this.props.formLabelEmail}</label>
            <input
              type="email"
              className="form-text js__form-mail"
              id="form-email"
              name="email"
              placeholder="Ej: sally.hill@gmail.com"
              required
              onChange = {inputAction}
            />
          </div>
          <div className="form__fill-input">
            <label htmlFor="form-tel" className="form-label">{this.props.formLabelTelephone}</label>
            <input
              type="tel"
              className="form-text js__form-phone"
              id="form-tel"
              name="phone"
              placeholder="Ej: 555-55-55-55"
              onChange = {inputAction}
            />
          </div>
          <div className="form__fill-input">
            <label htmlFor="form-linkedin" className="form-label">{this.props.formLabelLinkedin}</label>
            <input
              type="text"
              className="form-text js__form-linkedin"
              id="form-linkedin"
              name="linkedin"
              placeholder="Ej: @sally-hill"
              required
              onChange = {inputAction}
            />
          </div>
          <div className="form__fill-input">
            <label htmlFor="form-github" className="form-label">{this.props.formLabelGithub}</label>
            <input
              type="text"
              className="form-text js__form-github"
              id="form-github"
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
    formFillTitle: PropTypes.string.isRequired,
    formLabelName: PropTypes.string.isRequired,
    formLabelJob: PropTypes.string.isRequired,
    formLabelPhoto: PropTypes.string.isRequired,
    fillImageBtn: PropTypes.string.isRequired,
    formLabelEmail: PropTypes.string.isRequired,
    formLabelTelephone: PropTypes.string.isRequired,
    formLabelLinkedin: PropTypes.string.isRequired,
    formLabelGithub: PropTypes.string.isRequired,
  }
  
  export default CardsFormFill;