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
          form_name={this.props.form_name}
          form_career={this.props.form_career}
          paletteValue={this.props.paletteValue}
          RadioValue={this.props.RadioValue}					
          photo={this.props.photo}
          email={this.props.email}
          phone={this.props.phone}
          linkedin={this.props.linkedin}
          github={this.props.github}
        />
        <Footer />
      </div>
    );
  }
}

Cards.propTypes = {
  form_name: PropTypes.string.isRequired,
  form_career: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  divAction : PropTypes.func.isRequired,
  inputAction : PropTypes.func.isRequired,
  paletteValue: PropTypes.number,
}

export default Cards;