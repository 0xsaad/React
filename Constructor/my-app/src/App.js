import logo from './logo.svg';
import './App.css';
import React from 'react'
class App extends React.Component {
  constructor(){
    super();
    this.state={
      data:"Anil"
    }
  }
  render(){
    return(
      <h1>Hello World {this.state.data} </h1>
    )
  }
}

export default App;
