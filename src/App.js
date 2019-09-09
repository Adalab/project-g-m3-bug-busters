import React from 'react';
import './scss/main.scss';
import Landing from './components/Landing';
import Cards from './components/Cards';

class App extends React.Component {
  constructor(props){
    super(props);
    this.getInputValue = this.getInputValue.bind(this);
    this.state = {
      form_name : 'Mariaaa de lo ooooo con paquito el chocolatero XDD',
      form_career: 'Front-End Developer',
      previewResetBtn: ' RESET',
      formDesignTitle: 'diseña',
      formFillTitle: 'rellena',
      formLabelName: 'Nombre completo',
      formLabelJob: 'Puesto',
      formLabelPhoto: 'Imagen de perfil',
      fillImageBtn:'Añadir imagen',
      formLabelEmail:'Email',
      formLabelTelephone: 'Teléfono',
      formLabelLinkedin: 'Linkedin',
      formLabelGithub:'Github',
      formShareTitle: 'comparte',
      createCardBtn: 'Crear tarjeta',
    }
  }

  getInputValue(event){
    const targetId = event.currentTarget.id;
    const targetValue = event.currentTarget.value;

    const obj= {};

    obj[targetId] = targetValue;

    this.setState(obj);
    }
  render() {
    return (
      <Cards inputAction = {this.getInputValue}
             form_name= {this.state.form_name}
             defaultPreviewJob= {this.state.defaultPreviewJob}
             previewResetBtn={this.state.previewResetBtn}
             formDesignTitle={this.state.formDesignTitle}
             formFillTitle={this.state.formFillTitle}
             formLabelName={this.state.formLabelName}
             formLabelJob={this.state.formLabelJob}
             formLabelPhoto={this.state.formLabelPhoto}
             fillImageBtn={this.state.fillImageBtn}
             formLabelEmail={this.state.formLabelEmail}
             formLabelTelephone={this.state.formLabelTelephone}
             formLabelLinkedin={this.state.formLabelLinkedin}
             formLabelGithub={this.state.formLabelGithub}
             formShareTitle={this.state.formShareTitle}
             createCardBtn={this.state.createCardBtn}
      />
    );
  }
}
    
export default App;
