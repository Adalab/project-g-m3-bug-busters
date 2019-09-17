import React from 'react';
import PropTypes from 'prop-types';
import CardsPreview from './Cards_preview';
import CardsForm from './Cards_form';
import defaultImage from './defaultImage';

class CardsMain extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      previewImage: defaultImage
    }
  }

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
            previewData={this.state.previewImage}
						cleanData={this.props.cleanData} 
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
  divAction : PropTypes.func.isRequired,
  inputAction: PropTypes.func.isRequired,
  previewData: PropTypes.object.isRequired,
	getRadioValue: PropTypes.func,
	cleanData: PropTypes.func.isRequired,
}

export default CardsMain;