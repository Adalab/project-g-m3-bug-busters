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

            previewData={this.props.previewData}
						cleanData={this.props.cleanData} 
          />
          <CardsForm
            addClass = {this.props.addClass}
            id = {this.props.id}
            divAction = {this.props.divAction}
            inputAction={this.props.inputAction}
            getRadioValue={this.props.getRadioValue}
            previewData={this.props.previewData}
            cardUrl={this.props.cardUrl}
            sendRequest={this.props.sendRequest}
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
  cardUrl:PropTypes.string.isRequired,
}

export default CardsMain;