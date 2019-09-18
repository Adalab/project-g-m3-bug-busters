import React from 'react';
import PropTypes from 'prop-types';

class CardsFormTwitter extends React.Component {

 openTwitter ()  {
 const userUrl = this.props.cardUrl;
 const twitterText = '¡Hola! Aquí tienes mi tarjeta de contacto. No te olvides de llamarme. Saludos!';
 const hashtags = 'adalab,the-scripters,js';
 const buttonTwitter_href = 'https://twitter.com/intent/tweet?url='+encodeURIComponent(userUrl)+'&text='+encodeURIComponent(twitterText)+'&hashtags='+encodeURIComponent(hashtags);
 return buttonTwitter_href
}

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
        href={this.openTwitter()} target="__blank">
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