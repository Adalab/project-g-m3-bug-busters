import React from 'react';
import PropTypes from 'prop-types';
import CardsHeader from './Cards_header';
import CardsMain from './Cards_main';
import Footer from './Footer';

class Cards extends React.Component {

  render() {
    return (
      <div className="page page-cards">
        <CardsHeader />
        <CardsMain 
          addClass = {this.props.addClass}
          cleanData={this.props.cleanData} 
					getRadioValue={this.props.getRadioValue}
          inputAction = {this.props.inputAction}
          divAction = {this.props.divAction}
          sendRequest={this.props.sendRequest}
          id = {this.props.id}
          previewData={this.props.previewData}
          cardUrl={this.props.cardUrl}
          onChangeImage={this.props.onChangeImage}
        />
        <Footer />
      </div>
    );
  }
}

Cards.propTypes = {
  addClass: PropTypes.func.isRequired,
	cleanData: PropTypes.func.isRequired,
  getRadioValue: PropTypes.func,
  inputAction: PropTypes.func.isRequired,
  divAction: PropTypes.func.isRequired,
  sendRequest: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
 	previewData: PropTypes.object.isRequired,
  cardUrl:PropTypes.string.isRequired,
}

export default Cards;