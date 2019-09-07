import React from 'react';
import PropTypes from 'prop-types';

class CardsFormShare extends React.Component {
  render() {
    return (
      <div className="js__submit-container collapsed">
        <div className="submit-share js__collapsable">
          <h2 className="submit-share form-title title-3">{this.props.formShareTitle}</h2>
        </div>
        <div className="submit-container collapsable-container">
          <button
            className="button-create collapsebtn js__submit"
            type="submit"
            id="submit"
          >
            {this.props.createCardBtn}
          </button>
        </div>
      </div>
    );
  }
}

CardsFormShare.propTypes ={
  formShareTitle: PropTypes.string,
  createCardBtn: PropTypes.string,
}

export default CardsFormShare;