import React from 'react';
import PropTypes from 'prop-types';
import CardsFormDesign from './Cards_form-design';
import CardsFormFill from './Cards_form-fill';
import CardsFormShare from './Cards_form-share';
import CardsFormTwitter from './Cards_form-twitter';

class CardsForm extends React.Component {
  render() {
    const inputAction = this.props.inputAction;
    return (
      <section className="cards__section-2">
        <div className="wrapper">
          <form id="form" action="" method="POST">
            <CardsFormDesign formDesignTitle={this.props.formDesignTitle} />
            <CardsFormFill 
              inputAction = {inputAction}
              formFillTitle={this.props.formFillTitle} 
                           formLabelName={this.props.formLabelName}
                           formLabelJob={this.props.formLabelJob}
                           formLabelPhoto={this.props.formLabelPhoto}
                           fillImageBtn={this.props.fillImageBtn}
                           formLabelEmail={this.props.formLabelEmail}
                           formLabelTelephone={this.props.formLabelTelephone}
                           formLabelLinkedin={this.props.formLabelLinkedin}
                           formLabelGithub={this.props.formLabelGithub}
            />
            <CardsFormShare formShareTitle={this.props.formShareTitle} 
                            createCardBtn={this.props.createCardBtn}
            />
          </form>
          <CardsFormTwitter />  
        </div>
      </section>
    )
  }
}

CardsForm.propTypes ={
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

export default CardsForm;