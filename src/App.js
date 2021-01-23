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
		fetch(
			`http://www.mapquestapi.com/geocoding/v1/address?key=${process.env.REACT_APP_MAP_API_KEY}&location=Washington,DC`
		)
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.error(err);
			});

		let request = require('request');
		const url = 'https://api.openuv.io/api/v1/uv';

		let options = {
			method: 'GET',
			json: true,
			url: url,
			qs: { lat: '-33.34', lng: '115.342', dt: '2018-01-24T10:50:52.283Z' },
			headers: {
				'content-type': 'application/json',
				'x-access-token': `${process.env.REACT_APP_UV_API_KEY}`,
			},
		};
		request(options, function (error, response, body) {
			if (error) throw new Error(error);
			console.log(response.body.result.uv);
		});
	}

	render() {
		// console.log(`${process.env.REACT_APP_UV_API_KEY}`);
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
