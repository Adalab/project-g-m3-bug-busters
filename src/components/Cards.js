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
                   />
        <Footer />
      </div>
    );
  }
}

Cards.propTypes ={
  form_name: PropTypes.string.isRequired,
  form_career: PropTypes.string.isRequired,
}

export default Cards;