import React from 'react';
import CardsPreview from './Cards_preview';
import CardsForm from './Cards_form';

class CardsMain extends React.Component{
  render(){
    return(
      <main className="cards__main">
        <div className="cards__container">
            <CardsPreview />
            <CardsForm />   
        </div>
      </main>
    )
  }
}

export default CardsMain;