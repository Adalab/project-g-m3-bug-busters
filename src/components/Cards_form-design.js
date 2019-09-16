import React from 'react';
import PropTypes from 'prop-types';

const palette1Color1 = {backgroundColor: '#114e4e'};
const palette1Color2 = {backgroundColor: '#438792'};
const palette1Color3 = {backgroundColor: '#a2deaf'};

const palette2Color1 = {backgroundColor: '#420101'};
const palette2Color2 = {backgroundColor: '#bd1010'};
const palette2Color3 = {backgroundColor: '#e95626'};

const palette3Color1 = {backgroundColor: '#3e5b65'};
const palette3Color2 = {backgroundColor: '#eab052'};
const palette3Color3 = {backgroundColor: '#a0c0cf'};


class CardsFormDesign extends React.Component {

  render() {
    return (
      <fieldset className={`form__fieldset ${this.props.addClass(this.props.id, 'first')}`}  >
      <legend className="form__fielset-legend">Elegir tema</legend>
      <div className="form__design js__collapsable" id = "first"  onClick = {this.props.divAction}>
        <h2 className="form__design-title form-title title-1">diseña</h2>
      </div>
      <div className={`form__design-content design-container collapsable-container`} data_id = "first">
        <h3 className="form-colors-text">Colores:</h3>
        <div className="theme-container">
          <div className="theme">
            <label htmlFor="t1" className="theme__row">
              <input
                type="radio"
                className="theme__radio theme__radio1 js__theme__radio"
                id="t1"
                name="palette"
                value="1"
                defaultChecked={this.props.previewData.paletteValue === 1}
                onChange={this.props.RadioValue}
              />
              <ul className="colors">
                <li className="color" style={palette1Color1}>
                  Eden
                </li>
                <li className="color" style={palette1Color2}>
                        Wedgewood
                </li>
                <li className="color" style={palette1Color3}>
                        Celadon
                </li>
              </ul>
            </label>
          </div>
          <div className="theme">
            <label htmlFor="t2" className="theme__row">
              <input
                type="radio"
                className="theme__radio theme__radio2 js__theme__radio"
                id="t2"
                name="palette"
                value="2"
                defaultChecked={this.props.previewData.paletteValue === 2}
                onChange={this.props.RadioValue}
              />
              <ul className="colors">
                <li className="color" style={palette2Color1}>
                  Chocolate
                </li>
                <li className="color" style={palette2Color2}>
                  Thunderbird
                </li>
                <li className="color" style={palette2Color3}>
                  Flamingo
                </li>
              </ul>
            </label>
          </div>
          <div className="theme">
            <label htmlFor="t3" className="theme__row">
              <input
                type="radio"
                className="theme__radio theme__radio3 js__theme__radio"
                id="t3"
                name="palette"
                value="3"
                defaultChecked={this.props.previewData.paletteValue === 3}
                onChange={this.props.RadioValue}
              />
              <ul className="colors">
                <li className="color" style={palette3Color1}>
                  Fiord
                </li>
                <li className="color" style={palette3Color2}>
                  Ronchi
                </li>
                <li className="color" style={palette3Color3}>
                  Rock Blue
                </li>
              </ul>
            </label>
          </div>
        </div>
      </div>
    </fieldset>
    )
  }
}

CardsFormDesign.propTypes = {
  divAction : PropTypes.func,
  inputAction: PropTypes.func,
	previewData: PropTypes.object.isRequired
}

export default CardsFormDesign;