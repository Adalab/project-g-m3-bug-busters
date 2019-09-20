import React from 'react';
import PropTypes from 'prop-types';

class CardsFormShare extends React.Component {
  getCollapsable(id, data_id) {
    console.log(id, data_id)
    return (id === data_id ? '' :  'collapsed')
  }
  render() {
    return (
      <div className={`${this.props.addClass(this.props.id, 'third')}`} id = "third">
        <div onClick={this.props.divAction} id="third">
          <h2 className="form-title title-3">comparte</h2>
        </div>
        <div className= {`submit-container collapsable-container`} data-id = "third">
          <button
            className={`button-create ${this.props.cardUrl ? 'disabled' : ' btn-animation'}`}
            type="submit"
            id="submit"
            disabled= {this.props.cardUrl}
          >
					crear tarjeta
          </button>
        </div>
      </div>
    );
  }
}
CardsFormShare.propTypes = {
cardUrl:PropTypes.string.isRequired
}

export default CardsFormShare;