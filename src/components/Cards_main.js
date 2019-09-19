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
            divAction = {this.props.divAction}
            inputAction={this.props.inputAction}
            getRadioValue={this.props.getRadioValue}
            sendRequest={this.props.sendRequest}
            id = {this.props.id}
            previewData={this.props.previewData}
            cardUrl={this.props.cardUrl}
            onChangeImage={this.props.onChangeImage}
            defaultMiniAvatar={this.props.defaultMiniAvatar}
            
          />                     
        </div>
      </main>
    )
  }
}

CardsMain.propTypes = {
  addClass: PropTypes.func.isRequired,
  divAction : PropTypes.func.isRequired,
  inputAction: PropTypes.func.isRequired,
  getRadioValue: PropTypes.func,
  sendRequest: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  previewData: PropTypes.object.isRequired,
  cleanData: PropTypes.func.isRequired,
  cardUrl:PropTypes.string.isRequired,
}

export default CardsMain;