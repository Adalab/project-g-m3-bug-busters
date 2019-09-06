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
    }
  }
  render() {
    return (
      <Cards defaultPreviewName= {this.state.defaultPreviewName}
             defaultPreviewJob= {this.state.defaultPreviewJob}
      />
    );
  }
}
    
export default App;
