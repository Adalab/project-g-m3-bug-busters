import React from 'react';
import PropTypes from 'prop-types';
import CardsPreview from './Cards_preview';
import CardsForm from './Cards_form';

class CardsMain extends React.Component {
  render() {
    const inputAction = this.props.inputAction;
    return (
      <main className="cards__main">
        <div className="cards__container">
          <CardsPreview form_name={this.props.form_name}
            form_career={this.props.form_career}
            photo={this.props.photo}
            email={this.props.email}
            phone={this.props.phone}
            linkedin={this.props.linkedin}
            github={this.props.github}
          />
          <CardsForm
            inputAction={inputAction}
          />
        </div>
      </main>
    )
  }
}

CardsMain.propTypes = {
  form_name: PropTypes.string.isRequired,
  form_career: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
}
export default CardsMain;