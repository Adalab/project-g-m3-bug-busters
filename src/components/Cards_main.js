import React from 'react';
import PropTypes from 'prop-types';
import CardsPreview from './Cards_preview';
import CardsForm from './Cards_form';

class CardsMain extends React.Component{
  render(){
    return(
      <main className="cards__main">
        <div className="cards__container">
            <CardsPreview defaultPreviewName= {this.props.defaultPreviewName}
                          defaultPreviewJob= {this.props.defaultPreviewJob}/>
            <CardsForm formDesignTitle={this.props.formDesignTitle} 
                       formFillTitle={this.props.formFillTitle}
                       formShareTitle={this.props.formShareTitle}
            />   
        </div>
      </main>
    )
  }
}

CardsMain.propTypes ={
  defaultPreviewName: PropTypes.string,
  defaultPreviewJob: PropTypes.string,
  formDesignTitle: PropTypes.string,
  formFillTitle: PropTypes.string,
  formShareTitle: PropTypes.string,
}

export default CardsMain;