import React from 'react';

class CardsFormShare extends React.Component {
 
  render() {
    return (
      <div className={`js__submit-container ${this.props.visible}`} id = "third" onClick = {this.props.divAction}>
        <div className="submit-share js__collapsable">
          <h2 className="submit-share form-title title-3">comparte</h2>
        </div>
        <div className= {`submit-container collapsable-container`} data-id = "third">
          <button
            className="button-create collapsebtn js__submit"
            type="submit"
            id="submit"
          >
					crear tarjeta
          </button>
        </div>
      </div>
    );
  }
}

export default CardsFormShare;