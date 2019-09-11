import React from 'react';
import PropTypes from 'prop-types';
import CardsFormDesign from './Cards_form-design';
import CardsFormFill from './Cards_form-fill';
import CardsFormShare from './Cards_form-share';
import CardsFormTwitter from './Cards_form-twitter';

class CardsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDesign: 'collapsed',
      showFill: 'collapsed',
      showShare: 'collapsed',
    }
    this.setVisibleElement = this.setVisibleElement.bind(this);
  }

  setVisibleElement(event){
    console.log(`Evento visible ${event.currentTarget}`);
    console.log(event.currentTarget);
    
    const guiltyID = event.currentTarget.id;
    const guiltyIsCollapsed = event.currentTarget.classList.contains('collapsed');
    this.setState({
      showDesign: guiltyID === 'first' && guiltyIsCollapsed ? '' : 'collapsed',
      showFill: guiltyID === 'second'  && guiltyIsCollapsed ? '' : 'collapsed',
      showShare: guiltyID === 'third'  && guiltyIsCollapsed ? '' : 'collapsed',
    }
    )
  }

  render() {
    return (
      <section className="cards__section-2">
        <div className="wrapper">
          <form id="form" action="" method="POST">
            <CardsFormDesign 
              visible = {this.state.showDesign}
					    divAction = {this.setVisibleElement}
              paletteValue= {this.props.paletteValue}
              RadioValue={this.props.RadioValue}
              
            />
            <CardsFormFill 
              visible = {this.state.showFill}
              id = {this.props.id}
              inputAction = {this.props.inputAction}
              divAction = {this.setVisibleElement}
            />
            <CardsFormShare 
              visible = {this.state.showShare}
              id = {this.props.id}
              divAction = {this.setVisibleElement}
            />
          </form>
          <CardsFormTwitter />  
        </div>
      </section>
    )
  }
}

CardsForm.propTypes = {
  divAction : PropTypes.func.isRequired,
  inputAction: PropTypes.func.isRequired,
	paletteValue: PropTypes.number
}

export default CardsForm;