import React from 'react';
import PropTypes from 'prop-types';
import CardsPreview from './Cards_preview';
import CardsForm from './Cards_form';

class CardsMain extends React.Component {
  render() {
    return (
      <main className="cards__main">
        <div className="cards__container">
          <CardsPreview 
            form_name={this.props.form_name}
            form_career={this.props.form_career}
            photo={this.props.photo}
            email={this.props.email}
            phone={this.props.phone}
            linkedin={this.props.linkedin}
            github={this.props.github}
          />
          <CardsForm
            divAction = {this.props.divAction}
            inputAction={this.props.inputAction}
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
  divAction : PropTypes.func.isRequired,
  inputAction: PropTypes.func.isRequired
}
export default CardsMain;