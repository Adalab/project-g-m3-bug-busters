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
        <CardsMain defaultPreviewName= {this.props.defaultPreviewName}
                   defaultPreviewJob= {this.props.defaultPreviewJob}
                   formDesignTitle={this.props.formDesignTitle}
                   formFillTitle={this.props.formFillTitle}
                   formShareTitle={this.props.formShareTitle}
                   />
        <Footer />
      </div>
    );
  }
}

Cards.propTypes ={
  defaultPreviewName: PropTypes.string,
  defaultPreviewJob: PropTypes.string,
  formDesignTitle: PropTypes.string,
  formFillTitle: PropTypes.string,
  formShareTitle: PropTypes.string,
}

export default Cards;