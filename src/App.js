import React, { Component } from 'react';
import Home from './Home/Home';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			apiUrl: {},
		};
	}
	render() {
		return (
			<div>
				<header>
					<Home />
				</header>
			</div>
		);
	}
}

export default App;
