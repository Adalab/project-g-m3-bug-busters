import React from 'react';
import PropTypes from 'prop-types';

class CardsFormTwitter extends React.Component {
  render() {
    return (
      <div className={`share-container collapsable-container ${this.props.cardUrl !== ''? '' : 'hidden'}`}>
        <p className="card-success">
          La tarjeta ha sido creada:
        </p>
        <p className="share-link js__response">
        <a  className = "share-link"href={this.props.cardUrl} target="__blank">{this.props.cardUrl}</a>
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