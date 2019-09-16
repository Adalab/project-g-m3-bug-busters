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
         /*  name={this.props.name}
          career={this.props.career}
          paletteValue={this.props.paletteValue}
          getRadioValue={this.props.getRadioValue}					
          photo={this.props.photo}
          email={this.props.email}
          phone={this.props.phone}
          linkedin={this.props.linkedin}
          github={this.props.github} */
          previewData={this.props.previewData}
        />
        <Footer />
      </div>
    );
  }
}

Cards.propTypes = {
/*   name: PropTypes.string.isRequired,
  career: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired, */
  divAction : PropTypes.func.isRequired,
  inputAction : PropTypes.func.isRequired,
 /*  paletteValue: PropTypes.number, */
 	previewData: PropTypes.object.isRequired,
 	getRadioValue: PropTypes.func

}

export default Cards;