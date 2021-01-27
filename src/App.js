import React, { Component, useState } from 'react';
import Home from './Home/Home';
import UvIndex from './UvIndex/UvIndex';
import About from './About/About';
import './App.css';

const url1 = `http://www.mapquestapi.com/geocoding/v1/address?key=${process.env.REACT_APP_MAP_API_KEY}`;

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			lat: '',
			long: '',
			inputVal: '',
			map: null,
			showUvIndex: false,
			showModal1: false,
		};
	}

	showModal = (e) => {
		this.setState({ showModal1: !this.state.showModal1 });
	};

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
					showUvIndex: true,
				});
			})
			.catch((err) => {
				console.error(err);
			});
	};

	render() {
		return (
			<div>
				<header className='headerContainer'>
					<Home className='homeClass' />

					<button
						className='aboutButton'
						onClick={(e) => {
							this.showModal(e);
						}}>
						About{' '}
					</button>
					<div id='modalFont'>
						<About onClose={this.showModal} showModal={this.state.showModal1}>
							The sun is roughly 91.534 million miles away and yet, has the
							audacity to burn us all. As a pasty individual myself, the
							struggle is real. Enter your location below and follow the
							prompts, to see how long you should be staying out in the sun,
							before getting burned.
						</About>
					</div>
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
						<UvIndex lat={this.state.lat} long={this.state.long} />
					)}
				</div>
				<div></div>
			</div>
		);
	}
}

export default App;
