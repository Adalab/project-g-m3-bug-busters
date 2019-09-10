import React from 'react';
import PropTypes from 'prop-types';
import CardsPreview from './Cards_preview';
import CardsForm from './Cards_form';

class CardsMain extends React.Component{
  render(){
    const inputAction = this.props.inputAction;
    return(
      <main className="cards__main">
        <div className="cards__container">
            <CardsPreview form_name= {this.props.form_name}
                          form_career= {this.props.form_career}
                          />                    
            <CardsForm 
              inputAction = {inputAction}
            />   
        </div>
      </main>
    )
  }
}

CardsMain.propTypes ={
  form_name: PropTypes.string.isRequired,
  form_career: PropTypes.string.isRequired,
}

export default CardsMain;