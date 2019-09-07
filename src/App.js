import React from 'react';
import './scss/main.scss';
import Landing from './components/Landing';
import Cards from './components/Cards';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      defaultPreviewName : 'Mariaaa de lo ooooo con paquito el chocolatero XDD',
      defaultPreviewJob : 'Front-End Developer',
      previewResetBtn: ' RESET',
      formDesignTitle: 'diseña',
      formFillTitle: 'rellena',
      fillImageBtn:'Añadir imagen',
      formShareTitle: 'comparte',
    }
  }
  render() {
    return (
      <Cards defaultPreviewName= {this.state.defaultPreviewName}
             defaultPreviewJob= {this.state.defaultPreviewJob}
             previewResetBtn={this.state.previewResetBtn}
             formDesignTitle={this.state.formDesignTitle}
             formFillTitle={this.state.formFillTitle}
             fillImageBtn={this.state.fillImageBtn}
             formShareTitle={this.state.formShareTitle}
      />
    );
  }
}
    
export default App;
