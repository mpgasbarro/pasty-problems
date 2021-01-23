import React, { Component } from 'react';
import Home from './Home/Home';

const url =
	'https://api.openuv.io/api/v1/uv?lat=-33.34&lng=115.342&dt=2018-01-24T10:50:52.283Z';

// const url1 = `http://www.mapquestapi.com/geocoding/v1/address?key=${process.env.REACT_APP_MAP_API_KEY}&location="Boston,MA`;

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			uvIndex: '',
			lat: '',
			long: '',
		};
	}

	componentDidMount() {
		fetch(url, {
			method: 'GET',
			headers: {
				'content-type': 'application/json',
				'x-access-token': `${process.env.REACT_APP_UV_API_KEY}`,
			},
		})
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				this.setState({ uvIndex: res });
			})
			.catch((err) => {
				console.error(err);
			});
	}

	render() {
		console.log(this.state.uvIndex);
		return (
			<div>
				<header>
					<Home />
				</header>
			</div>
		);
	}
}

// let request = require('request');

// let options1 = {
// 	method: 'GET',
// 	json: true,
// 	url: url1,
// 	headers: {
// 		'content-type': 'application/json',
// 	},
// };
// request(options1, function (error1, response1, body1) {
// 	if (error1) throw new Error(error1);
// });

// let options = {
// 	method: 'GET',
// 	json: true,
// 	url: url,
// 	qs: { lat: '-33.34', lng: '115.342', dt: '2018-01-24T10:50:52.283Z' },
// 	headers: {
// 		'content-type': 'application/json',
// 		'x-access-token': `${process.env.REACT_APP_UV_API_KEY}`,
// 	},
// };
// request(options, function (error, response, body) {
// 	if (error) throw new Error(error);
// 	console.log(response.body.result.uv);
// });

export default App;
