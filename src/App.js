import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Chat from './Chat'
import User from './Components/User'

function App(props) {

	return (
		<HashRouter basename='/'>
			<Switch>
				<Route exact path='/' component={User} />
				<Route path='/chat' component={Chat} />
			</Switch>
		</HashRouter>
	)
}

export default App
