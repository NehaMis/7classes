import React,  { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import fire from './config/fire';
import Home from './Home/Home';
import Root from './Root';
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router } 	from 'react-router-dom';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user : null
    }
  }
 componentDidMount(){
  this.authListener();  
 }

  authListener(){
    fire.auth().onAuthStateChanged((user)=>{
      if(user){
        this.setState({user})
      }
      else{
        this.setState({user : null})
      }
    })
  }


  render(){
    return (
      <Router>
				{ this.state.user ? 
					<div><Root /></div> : <div><Home /></div> 
				}
			</Router>
    );
  }
}

export default App;
