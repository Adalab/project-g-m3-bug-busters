import React from 'react';

const color1Palette1 = {backgroundColor: '#114e4e'};
const color2Palette1 = {backgroundColor: '#438792'};
const color3Palette1 = {backgroundColor: '#a2deaf'};

const color1Palette2 = {backgroundColor: '#420101'};
const color2Palette2 = {backgroundColor: '#bd1010'};
const color3Palette2 = {backgroundColor: '#e95626'};

const color1Palette3 = {backgroundColor: '#3e5b65'};
const color2Palette3 = {backgroundColor: '#eab052'};
const color3Palette3 = {backgroundColor: '#a0c0cf'};


class CardsFormDesign extends React.Component {
  render() {
    return (
      <fieldset className="form__fieldset">
      <legend className="form__fielset-legend">Elegir tema</legend>
      <div className="form__design js__collapsable">
        <h2 className="form__design-title form-title title-1">Diseña</h2>
      </div>
      <div className="form__design-content design-container collapsable-container">
        <h3 className="form-colors-text">Colores:</h3>
        <div className="theme-container">
          <div className="theme">
            <label for="t1" className="theme__row">
              <input
                type="radio"
                className="theme__radio theme__radio1 js__theme__radio"
                id="t1"
                name="palette"
                value="1"
              />
              <ul className="colors">
                <li className="color" style={color1Palette1}>
                  Eden
                </li>
                <li className="color" style={color2Palette1}>
                        Wedgewood
                </li>
                <li className="color" style={color3Palette1}>
                        Celadon
                </li>
              </ul>
            </label>
          </div>
          <div className="theme">
            <label for="t2" className="theme__row">
              <input
                type="radio"
                className="theme__radio theme__radio2 js__theme__radio"
                id="t2"
                name="palette"
                value="2"
              />
              <ul className="colors">
                <li className="color" style={color1Palette2}>
                  Chocolate
                </li>
                <li className="color" style={color2Palette2}>
                  Thunderbird
                </li>
                <li className="color" style={color3Palette2}>
                  Flamingo
                </li>
              </ul>
            </label>
          </div>
          <div className="theme">
            <label for="t3" className="theme__row">
              <input
                type="radio"
                className="theme__radio theme__radio3 js__theme__radio"
                id="t3"
                name="palette"
                value="3"
              />
              <ul className="colors">
                <li className="color" style={color1Palette3}>
                  Fiord
                </li>
                <li className="color" style={color2Palette3}>
                  Ronchi
                </li>
                <li className="color" style={color3Palette3}>
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

export default CardsFormDesign;