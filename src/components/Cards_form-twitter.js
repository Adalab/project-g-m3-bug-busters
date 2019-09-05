import React from 'react';

class CardsFormTwitter extends React.Component {
  render() {
    return (
      <div className="share-container collapsable-container hidden">
        <p className="card-success">La tarjeta ha sido creada:</p>
        <p className="share-link js__response"></p>
        <a className="link-twitter js__link-twitter"
        href="" target="_blank">
          Compartir en Twitter
        </a>
      </div>
    )
  }
}

export default CardsFormTwitter;