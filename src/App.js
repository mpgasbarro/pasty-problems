import React, { Component } from 'react';
import Home from './Home/Home';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			apiUrl: {},
		};
	}

	componentDidMount() {
		let request = require('request');
		const url = 'https://api.openuv.io/api/v1/uv';

		let options = {
			method: 'GET',
			json: true,
			url: url,
			qs: { lat: '-33.34', lng: '115.342', dt: '2018-01-24T10:50:52.283Z' },
			headers: {
				'content-type': 'application/json',
				'x-access-token': '7469fa7008ca4c729b71acc469c72468',
			},
		};

		request(options, function (error, response, body) {
			if (error) throw new Error(error);
			console.log(response.body.result.uv);
		});
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
