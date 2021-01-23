import React, { Component } from 'react';
import Home from './Home/Home';
import Userinput from './UserInput/Userinput';

const url =
	'https://api.openuv.io/api/v1/uv?lat=-33.34&lng=115.342&dt=2018-01-24T10:50:52.283Z';

const url1 = `http://www.mapquestapi.com/geocoding/v1/address?key=${process.env.REACT_APP_MAP_API_KEY}&location="Boston,MA`;

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			uvIndex: '',
			lat: '',
			long: '',
			inputValue: '',
		};
		this.handleInputValue = this.handleInputValue.bind(this);
	}
	handleInputValue(val) {
		this.setState({ inputValue: val });
	}

	componentDidMount() {
		fetch(url1, {
			method: 'GET',
			headers: {
				'content-type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then((res) => {
				this.setState({
					lat: res.results[0].locations[0].latLng.lat,
					long: res.results[0].locations[0].latLng.lng,
				});
				// this.setState({ uvIndex: res });
			})
			.catch((err) => {
				console.error(err);
			});

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
		console.log(this.state.inputValue);
		return (
			<div>
				<header>
					<Home />
				</header>
				<div>
					<Userinput handleInput={this.handleInputValue} />
				</div>
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
