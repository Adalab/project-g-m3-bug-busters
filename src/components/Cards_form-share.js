import React from 'react';

class CardsFormShare extends React.Component {
  getCollasableClass(str) {
    return str ? '' : 'collapsable-container';
  }
  render() {
    return (
      <div className="js__submit-container collapsed">
        <div className="submit-share js__collapsable">
          <h2 className="submit-share form-title title-3">comparte</h2>
        </div>
        <div className="submit-container collapsable-container">
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