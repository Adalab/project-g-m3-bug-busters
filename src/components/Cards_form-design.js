import React from 'react';

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
                {/* <li className="color" style="background-color:#114e4e">
                  Eden
          </li>
                <li className="color" style="background-color:#438792">
                  Wedgewood
          </li>
                <li className="color" style="background-color:#a2deaf">
                  Celadon
          </li> */}
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
                {/* <li className="color" style="background-color: #420101">
                  Chocolate
          </li>
                <li className="color" style="background-color: #bd1010">
                  Thunderbird
          </li>
                <li className="color" style="background-color: #e95626">
                  Flamingo
          </li> */}
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
                {/* <li className="color" style="background-color: #3e5b65">
                  Fiord
          </li>
                <li className="color" style="background-color: #eab052">
                  Ronchi
          </li>
                <li className="color" style="background-color: #a0c0cf">
                  Rock Blue
          </li> */}
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