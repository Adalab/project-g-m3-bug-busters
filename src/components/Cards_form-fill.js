import React from 'react';
import PropTypes from 'prop-types';
import GetAvatar from './GetAvatar';
import defaultImage from './defaultImage';
import Profile from './Profile';

class CardsFormFill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAvatarDefault: true,
      profile: {
        avatar: defaultImage,
      }
    };
    this.updateAvatar = this.updateAvatar.bind(this);
  }
  componentDidMount(){
    const smallPic = JSON.parse(localStorage.getItem('smallPreview'));
    if(smallPic) {
      this.setState(prevState => {prevState.profile.avatar = smallPic;
        return{profile : prevState.profile, isAvatarDefault:false}
      });
    }
  }

  updateAvatar(img) {
    this.props.onChangeImage(img);
    const {profile} = this.state;
    this.setState(() => {
      const newProfile = {...profile, avatar: img};
      return {
        profile: newProfile,
        isAvatarDefault: false
      }
    },
    () => {localStorage.setItem('smallPreview', JSON.stringify(this.state.profile.avatar))}
    );
  }


  render() {
    
    const inputAction = this.props.inputAction;
    return (
      <fieldset className={`form__fieldset ${this.props.addClass(this.props.id, 'second')}`} >
        <legend className="form__fielset-legend">
          Completar información
          </legend>
        <div className="form_fill" onClick={this.props.divAction} id="second">
          <h2 className="form-title title-2">rellena</h2>
        </div>
        <div className="fill-container collapsable-container" data_id = "second">
          <div>
            <label htmlFor="name" className="form-label">Nombre completo</label>
            <input
              type="text"
              className="form-text required_input"
              id="name"
              name="name"
              placeholder="Ej: Sally Jill"
              required
              onChange = {inputAction}
							value = {this.props.previewData.name}
            />
          </div>
          <div className="form__fill-input">
            <label htmlFor="job" className="form-label">Puesto</label>
            <input
              type="text"
              className="form-text required_input"
              id="job"
              name="job"
              placeholder="Ej: Front-end unicorn"
              required
              onChange = {inputAction}
							value = {this.props.previewData.job}
            />
          </div>

          <div className="form__fill-input">
            <label 
              htmlFor="photo" 
              className="form-label required_input">Imagen de perfil
            </label>


            <GetAvatar 
              avatar={this.state.profile.avatar} 
              isAvatarDefault={this.props.defaultMiniAvatar}
              updateAvatar={this.updateAvatar}
            />

            <Profile avatar={this.state.profile.avatar} />
          </div> 

          <div className="form__fill-input">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-text required_input"
              id="email"
              name="email"
              placeholder="Ej: sally.hill@gmail.com"
              required
              onChange = {inputAction}
              value = {this.props.previewData.email}
            />
          </div>
          <div className="form__fill-input">
            <label htmlFor="phone" className="form-label">Teléfono</label>
            <input
              type="tel"
              className="form-text"
              id="phone"
              name="phone"
              placeholder="Ej: 555-55-55-55"
              onChange = {inputAction}
							value = {this.props.previewData.phone}
            />
          </div>
          <div className="form__fill-input">
            <label htmlFor="linkedin" className="form-label">LinkedIn</label>
            <input
              type="text"
              className="form-text required_input"
              id="linkedin"
              name="linkedin"
              placeholder="Ej: @sally-hill"
              required
              onChange = {inputAction}
							value = {this.props.previewData.linkedin}
            />
          </div>
          <div className="form__fill-input">
            <label htmlFor="github" className="form-label">Github</label>
            <input
              type="text"
              className="form-text required_input"
              id="github"
              name="github"
              placeholder="Ej: @sally-hill"
              required
              onChange = {inputAction}
							value = {this.props.previewData.github}
            />
          </div>
        </div>
      </fieldset>
      )
    }
  }

	CardsFormFill.propTypes = {
		inputAction: PropTypes.func.isRequired,
    previewData: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
	}
  
  export default CardsFormFill;