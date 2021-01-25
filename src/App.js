import React, { Component } from 'react';
import Home from './Home/Home';
import UvIndex from './UvIndex/UvIndex';

const url1 = `http://www.mapquestapi.com/geocoding/v1/address?key=${process.env.REACT_APP_MAP_API_KEY}`;

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			uvInfo: '',
			lat: '',
			long: '',
			inputVal: '',
			map: null,
			showUvIndex: false,
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
					uvInfo: res,
					lat: res.results[0].locations[0].latLng.lat,
					long: res.results[0].locations[0].latLng.lng,
					map: res.results[0].locations[0].mapUrl,
					showUvIndex: true,
				});
			})
			.catch((err) => {
				console.error(err);
			});
		// this.handleUv();
	};

	render() {
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
				<div>
					{this.state.showUvIndex && (
						<UvIndex
							uvInfo={this.state.uvInfo}
							lat={this.state.lat}
							long={this.state.long}
						/>
					)}
				</div>
			</div>
		);
	}
}

export default App;
