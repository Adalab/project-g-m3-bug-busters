import React from 'react';
import './scss/main.scss';
import Landing from './components/Landing'
import Cards from './components/Cards';
import {Route, Switch } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      previewData : {
        name: '',
        career: '',
        photo: '',
        paletteValue: 1,
        email: '',
        tel: '',
        linkedin: '',
        github: ''        
      },
      id : 'first'
    };

		 this.defaultData = {
			name: '',
			career: '',
			photo: '',
			paletteValue: 1,
			email: '',
			tel: '',
			linkedin: '',
			github: '' 
		};	

    this.getInputValue = this.getInputValue.bind(this);
    this.getRadioValue = this.getRadioValue.bind(this);
    this.getCollapsable = this.getCollapsable.bind(this);
    this.addCollapsableClass = this.addCollapsableClass.bind(this);
		this.cleanData = this.cleanData.bind(this);
  }

	getLocalStorage(){
	const lsState = JSON.parse(localStorage.getItem('state'));
	console.log(lsState);
		if(lsState === null) {
		this.cleanData();
		} else {
			this.setState({previewData: lsState})
			}
	}

	componentDidMount(){
		this.getLocalStorage();
	}
	
	cleanData(){
  this.setState({previewData: this.defaultData});
		localStorage.clear('state');
	} 

  getInputValue(event) {
    const targetId = event.currentTarget.id;
    const targetValue = event.currentTarget.value;
		this.setState(prevState => {
			return {
				previewData: {...prevState.previewData, 
				[targetId]: targetValue
				}
			}	
  	}, () => {localStorage.setItem('state', JSON.stringify(this.state.previewData))}
	)
}

	getRadioValue(event) {
  const getRadioValue = parseInt(event.currentTarget.value); 

  this.setState(prevState => {
    return {
      previewData: {
        ...prevState.previewData,
        paletteValue: getRadioValue
      }
    };
  }, () => {localStorage.setItem('state', JSON.stringify(this.state.previewData));}
	);
  }

  addCollapsableClass(id, data_id) {
    return (id === data_id ? null :  'collapsed')
  }

  getCollapsable(event){
    const targetCollapsableID = event.currentTarget.id;
 
    this.setState (
      prevState => {
      if (prevState.id === null) {
        return(
          {
            id: targetCollapsableID 
          }
        )
      }
      else if (
        prevState.id === targetCollapsableID 
      ) {
        return (
          {
            id: null
          }
        )
      }
      else{
        return {
          id: targetCollapsableID
        }
      }
      }, () => {localStorage.setItem('state', JSON.stringify(this.state.previewData));}
    )
  }
  
 render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/Cards" render={()=> <Cards 
              addClass = {this.addCollapsableClass}
              id = {this.state.id}
              divAction = {this.getCollapsable}
              inputAction={this.getInputValue}
              getRadioValue={this.getRadioValue}
              previewData={this.state.previewData}
              cleanData={this.cleanData} 
				      />
          } />
        </Switch>
        </React.Fragment>
		)
  }
}	

export default App;