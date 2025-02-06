import React, { Component } from 'react'
import './App.css'
// import HookCounter from './components/HookCounter'
// import HookCounterTwo from './components/HookCounterTwo'
// import HookCounterThree from './components/HookCounterThree'
import HookCounterFour from './components/HookCounterFour'

class App extends Component {
	render() {
		return (
			<div className="App">
				{/* <HookCounter />
				<HookCounterTwo />
				<HookCounterThree />  */}
				<HookCounterFour />
			</div>
		)
	}
}

export default App
