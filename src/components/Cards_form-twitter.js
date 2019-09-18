import React from 'react';
import PropTypes from 'prop-types';

class CardsFormTwitter extends React.Component {
  render() {
    return (
      <div className="share-container collapsable-container hidden">
        <p className="card-success">
          La tarjeta ha sido creada:
        </p>
        <p className="share-link js__response">
        {this.props.cardUrl}
        </p>
        <a className="link-twitter js__link-twitter"
        href="" target="_blank">
          Compartir en Twitter
        </a>
      </div>
    )
  }
}

CardsFormTwitter.propTypes ={
  cardUrl:PropTypes.string.isRequired,
}
export default CardsFormTwitter;