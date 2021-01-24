import React, { Component } from 'react';
import Home from './Home/Home';
import Userinput from './UserInput/Userinput';

const url =
	'https://api.openuv.io/api/v1/uv?lat=-33.34&lng=115.342&dt=2018-01-24T10:50:52.283Z';

const url1 = `http://www.mapquestapi.com/geocoding/v1/address?key=${process.env.REACT_APP_MAP_API_KEY}`;

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			uvIndex: '',
			lat: '',
			long: '',
			inputVal: '',
			map: null,
		};
	}
	onChange = (event) => {
		this.setState({ inputVal: event.target.value });
	};

	onSubmit = (event) => {
		event.preventDefault();

		fetch(`${url1}&location=${this.state.inputVal}`, {
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
					map: res.results[0].locations[0].mapUrl,
				});
			})
			.catch((err) => {
				console.error(err);
			});

		// getUvIndex = () => {
		// 	const longitude = `${this.state.long}`;
		// 	const latitude = `${this.state.lat}`;

		// 	const url = `https://api.openuv.io/api/v1/uv?lat=-${latitude}&lng=${longitude}&dt=2018-01-24T10:50:52.283Z`;

		// 	fetch(url, {
		// 		method: 'GET',
		// 		headers: {
		// 			'content-type': 'application/json',
		// 			'x-access-token': `${process.env.REACT_APP_UV_API_KEY}`,
		// 		},
		// 	})
		// 		.then((res) => res.json())
		// 		.then((res) => {
		// 			this.setState({ ...this.state, uvIndex: res });
		// 		})
		// 		.catch((err) => {
		// 			console.error(err);
		// 		});
		// };
	};

	render() {
		console.log(this.state);
		return (
			<div>
				<header>
					<Home />
				</header>
				<div>
					<form>
						<input
							type='text'
							value={this.state.inputVal}
							onChange={this.onChange}
						/>
						<button onClick={this.onSubmit} />
					</form>
					{this.state.map && (
						<img src={this.state.map} alt='picture of the input location' />
					)}
				</div>
			</div>
		);
	}
}

export default App;
