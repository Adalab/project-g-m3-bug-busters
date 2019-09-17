import React from 'react';
import {Link} from 'react-router-dom';

class CardsHeader extends React.Component{
  render(){
    return(
      <header className="cards__header">
        <Link to="/"><h1 className="cards__title">Awesome profile cards</h1></Link>  
        
      </header>
    );
  }
}

export default CardsHeader;