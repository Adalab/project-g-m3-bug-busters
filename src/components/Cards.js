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
          id = {this.props.id}
          divAction = {this.props.divAction}
          inputAction = {this.props.inputAction}
					getRadioValue={this.props.getRadioValue}
          previewData={this.props.previewData}
					cleanData={this.props.cleanData} 
        />
        <Footer />
      </div>
    );
  }
}

Cards.propTypes = {
	cleanData: PropTypes.func.isRequired,
  divAction: PropTypes.func.isRequired,
  inputAction: PropTypes.func.isRequired,
 	previewData: PropTypes.object.isRequired,
 	getRadioValue: PropTypes.func,
}

export default Cards;