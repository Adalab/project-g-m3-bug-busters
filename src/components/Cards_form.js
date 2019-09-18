import React from 'react';
import PropTypes from 'prop-types';
import CardsFormDesign from './Cards_form-design';
import CardsFormFill from './Cards_form-fill';
import CardsFormShare from './Cards_form-share';
import CardsFormTwitter from './Cards_form-twitter';

class CardsForm extends React.Component {
  render() {
    return (
      <section className="cards__section-2">
        <div className="wrapper">
          <form id="form" action="" method="POST">
            <CardsFormDesign 
              addClass = {this.props.addClass}
					    divAction = {this.props.divAction}
              getRadioValue={this.props.getRadioValue}
              id = {this.props.id}
              previewData = {this.props.previewData}
            />
            <CardsFormFill 
              addClass = {this.props.addClass}
              id = {this.props.id}
              inputAction = {this.props.inputAction}
              divAction = {this.props.divAction}
              previewData = {this.props.previewData}
              onChangeImage={this.props.onChangeImage}
            />
            <CardsFormShare 
              addClass = {this.props.addClass}
              id = {this.props.id}
              divAction = {this.props.divAction}
            />
          </form>
          <CardsFormTwitter />  
        </div>
      </section>
    )
  }
}

CardsForm.propTypes = {
  divAction : PropTypes.func.isRequired,
  inputAction: PropTypes.func.isRequired,
	previewData: PropTypes.object.isRequired,
 	getRadioValue: PropTypes.func
}

export default CardsForm;