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
                          defaultPreviewJob= {this.props.defaultPreviewJob}
                          previewResetBtn={this.props.previewResetBtn}
                          />
                          
            <CardsForm formDesignTitle={this.props.formDesignTitle} 
                       formFillTitle={this.props.formFillTitle}
                       fillImageBtn={this.props.fillImageBtn}
                       formShareTitle={this.props.formShareTitle}
                       createCardBtn={this.props.createCardBtn}
            />   
        </div>
      </main>
    )
  }
}

CardsMain.propTypes ={
  defaultPreviewName: PropTypes.string.isRequired,
  defaultPreviewJob: PropTypes.string.isRequired,
  previewResetBtn: PropTypes.string.isRequired,
  formDesignTitle: PropTypes.string.isRequired,
  formFillTitle: PropTypes.string.isRequired,
  fillImageBtn: PropTypes.string.isRequired,
  formShareTitle: PropTypes.string.isRequired,
  createCardBtn: PropTypes.string.isRequired,
}

export default CardsMain;