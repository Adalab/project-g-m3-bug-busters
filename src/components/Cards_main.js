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
            /* name={this.props.name}
            career={this.props.career} */
					/* 	paletteValue={this.props.paletteValue} */
            /* photo={this.props.photo}
            email={this.props.email}
            phone={this.props.phone}
            linkedin={this.props.linkedin}
            github={this.props.github} */
            previewData={this.props.previewData}
          />
          <CardsForm
            addClass = {this.props.addClass}
            id = {this.props.id}
            divAction = {this.props.divAction}
            inputAction={this.props.inputAction}
            getRadioValue={this.props.getRadioValue}
            /* paletteValue={this.props.paletteValue} */
            previewData={this.props.previewData}
          />                     
        </div>
      </main>
    )
  }
}

CardsMain.propTypes = {
/*   name: PropTypes.string.isRequired,
  career: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired, */
  divAction : PropTypes.func.isRequired,
  inputAction: PropTypes.func.isRequired,
 /*  paletteValue: PropTypes.number, */
  previewData: PropTypes.object.isRequired,
	getRadioValue: PropTypes.func
}

export default CardsMain;