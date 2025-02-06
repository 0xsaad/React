import './App.css';
// import React from 'react'
import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    super();
    console.warn("constructor")
    this.state = {
      count : 0
    }
  }

  componentDidUpdate(preProps, preState, snapshots)
  {
    console.warn("componentDidUpdate", preState)
  }

  render() {
    return (
      <div className='App'>
        <h1>Component Did Update {this.state.count}</h1>
        <button onClick={() => {this.setState({count : this.state.count + 1})}}> Update Name</button>
        </div>
    )
  }
}


