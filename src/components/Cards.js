import React from 'react';

import CardsHeader from './Cards_header';
import CardsMain from './Cards_main';
import Footer from './Footer';


class Cards extends React.Component {
  render() {
    return (
      <div className="page page-cards">
        <CardsHeader />
        <CardsMain />
        <Footer />
      </div>
    );
  }
}

export default Cards;