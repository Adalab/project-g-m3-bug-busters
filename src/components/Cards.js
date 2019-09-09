import React from 'react';
import PropTypes from 'prop-types';
import CardsHeader from './Cards_header';
import CardsMain from './Cards_main';
import Footer from './Footer';


class Cards extends React.Component {
  
  render() {
    const inputAction = this.props.inputAction;
    return (
      <div className="page page-cards">
        <CardsHeader />
        <CardsMain inputAction = {inputAction}
              			form_name= {this.props.form_name}
                   form_career= {this.props.form_career}
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
  form_name: PropTypes.string.isRequired,
  form_career: PropTypes.string.isRequired,
  previewResetBtn: PropTypes.string.isRequired,
  formDesignTitle: PropTypes.string.isRequired,
  formFillTitle: PropTypes.string.isRequired,
  formLabelName: PropTypes.string.isRequired,
  formLabelJob: PropTypes.string.isRequired,
  formLabelPhoto: PropTypes.string.isRequired,
  fillImageBtn: PropTypes.string.isRequired,
  formLabelEmail: PropTypes.string.isRequired,
  formLabelTelephone: PropTypes.string.isRequired,
  formLabelLinkedin: PropTypes.string.isRequired,
  formLabelGithub: PropTypes.string.isRequired,
  formShareTitle: PropTypes.string.isRequired,
  createCardBtn: PropTypes.string.isRequired,
}

export default Cards;