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
                   previewResetBtn={this.props.previewResetBtn}
                   formDesignTitle={this.props.formDesignTitle}
                   formFillTitle={this.props.formFillTitle}
                   fillImageBtn={this.props.fillImageBtn}
                   formShareTitle={this.props.formShareTitle}
                   createCardBtn={this.props.createCardBtn}
                   />
        <Footer />
      </div>
    );
  }
}

Cards.propTypes ={
  defaultPreviewName: PropTypes.string.isRequired,
  defaultPreviewJob: PropTypes.string.isRequired,
  previewResetBtn: PropTypes.string.isRequired,
  formDesignTitle: PropTypes.string.isRequired,
  formFillTitle: PropTypes.string.isRequired,
  fillImageBtn: PropTypes.string.isRequired,
  formShareTitle: PropTypes.string.isRequired,
  createCardBtn: PropTypes.string.isRequired,
}

export default Cards;