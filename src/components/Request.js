import React from 'react';

class Request extends React.Component {
  render() {
    
    fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
      method: 'POST',
      body: JSON.stringify(this.state.previewData),
      headers: {
        'content-type': 'application/json'
      },
    })
      .then(function(resp) { return resp.json(); })
    //   .then(data => {
    //     cardUrl = data.cardURL;
    //     shareUrl.innerHTML = '<a class="share-link-url" target="__blank" href=' + cardUrl + '>' + cardUrl + '</a>';
    //   });
    // openCollapsable3();
  }
}




export default Request; 