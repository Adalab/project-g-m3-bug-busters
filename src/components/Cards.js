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
                   formLabelName={this.props.formLabelName}
                   formLabelJob={this.props.formLabelJob}
                   formLabelPhoto={this.props.formLabelPhoto}
                   fillImageBtn={this.props.fillImageBtn}
                   formLabelEmail={this.props.formLabelEmail}
                   formLabelTelephone={this.props.formLabelTelephone}
                   formLabelLinkedin={this.props.formLabelLinkedin}
                   formLabelGithub={this.props.formLabelGithub}
                   formShareTitle={this.props.formShareTitle}
                   createCardBtn={this.props.createCardBtn}
                   />
        <Footer />
      </div>
    );
  }
}

Cards.propTypes ={
  defaultPreviewName: PropTypes.string,
  defaultPreviewJob: PropTypes.string,
  previewResetBtn: PropTypes.string,
  formDesignTitle: PropTypes.string,
  formFillTitle: PropTypes.string,
  fillImageBtn: PropTypes.string,
  formShareTitle: PropTypes.string,
  createCardBtn: PropTypes.string,
}

export default Cards;