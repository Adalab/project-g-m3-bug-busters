import React from 'react';
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
            <CardsFormDesign />
            <CardsFormFill 
              inputAction = {inputAction}
            />
            <CardsFormShare 
            />
          </form>
          <CardsFormTwitter />  
        </div>
      </section>
    )
  }
}

export default CardsForm;