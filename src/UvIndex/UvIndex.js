import React, { Component } from 'react';
import './UvIndex.css';

class UVIndex extends Component {
	constructor(props) {
		super(props);
		this.state = {
			uvIndex: '',
			lat: this.props.lat,
			long: this.props.long,
		};
	}

	componentDidMount() {
		const lat = this.state.lat;
		const long = this.state.long;
		const url = `https://api.openuv.io/api/v1/uv?lat=${lat}&lng=${long}`;

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

	onPress = (event) => {
		if (event.target.innerText === 'SkinType 1') {
			this.render(this.state.uvIndex);
		} else if (event.target.innerText === 'SkinType 2') {
		} else if (event.target.innerText === 'SkinType 3') {
		} else if (event.target.innerText === 'SkinType 4') {
		} else if (event.target.innerText === 'SkinType 5') {
		} else {
		}
	};

	render() {
		console.log(this.state.uvIndex);
		return (
			<div>
				<h2> What is your skin type? </h2>
				<button className='skinType1' onClick={this.onPress}>
					{' '}
					SkinType 1{' '}
				</button>
				<h5>
					Very fair skin, white; red or blond hair; light-colored eyes; freckles
					likely
				</h5>
				<button className='skinType2' onClick={this.onPress}>
					{' '}
					SkinType 2{' '}
				</button>
				<h5>Fair skin, white; light eyes; light hair.</h5>
				<button className='skinType3'> SkinType 3 </button>
				<h5>
					{' '}
					Fair skin, cream white; any eye or hair color (very common skin type){' '}
				</h5>
				<button className='skinType4'> SkinType 4 </button>
				<h5>
					{' '}
					Olive skin, typical Mediterranean Caucasian skin; dark brown hair;
					medium to heavy pigmentation{' '}
				</h5>
				<button className='skinType5'> SkinType 5 </button>
				<h5>
					Brown skin, typical Middle Eastern skin; dark hair; rarely sun
					sensitive
				</h5>
				<button className='skinType5'> SkinType 6 </button>
				<h5> Black skin; rarely sun sensitive</h5>
			</div>
		);
	}
}

export default UVIndex;
