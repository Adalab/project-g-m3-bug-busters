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
			form_photo: 'https://image.shutterstock.com/image-photo/palomino-horse-avelignese-haflinger-breed-260nw-1456529102.jpg',
			form_email: '',
			form_tel: '',
			form_linkedin: '',
			form_github: '',
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
             form_career= {this.state.form_career}
      />
    );
  }
}
    
export default App;
