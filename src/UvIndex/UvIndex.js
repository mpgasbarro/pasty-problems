import React, { Component } from 'react';
import './UvIndex.css';
import { Link } from 'react-scroll';

class UVIndex extends Component {
	constructor(props) {
		super(props);
		this.state = {
			uvIndex: '',
			lat: this.props.lat,
			long: this.props.long,
			showBurnTime1: false,
			showBurnTime2: false,
			showBurnTime3: false,
			showBurnTime4: false,
			showBurnTime5: false,
			showBurnTime6: false,
		};
	}

	componentDidMount() {
		const lat = this.state.lat;
		const long = this.state.long;
		let url = `https://api.openuv.io/api/v1/uv?lat=${lat}&lng=${long}`;

		fetch(url, {
			method: 'GET',
			headers: {
				'content-type': 'application/json',
				'x-access-token': `${process.env.REACT_APP_UV_API_KEY}`,
			},
		})
			.then((res) => res.json())
			.then((res) => {
				this.setState({ uvIndex: res });
			})
			.catch((err) => {
				console.error(err);
			});
	}

	onPress = (event) => {
		if (event.target.innerText === 'SkinType 1') {
			this.setState({ showBurnTime1: true });
		} else if (event.target.innerText === 'SkinType 2') {
			this.setState({ showBurnTime2: true });
		} else if (event.target.innerText === 'SkinType 3') {
			this.setState({ showBurnTime3: true });
		} else if (event.target.innerText === 'SkinType 4') {
			this.setState({ showBurnTime4: true });
		} else if (event.target.innerText === 'SkinType 5') {
			this.setState({ showBurnTime5: true }); //After 1 second, set render to true
		} else if (event.target.innerText === 'SkinType 6') {
			this.setState({ showBurnTime6: true }); //After 1 second, set render to true
		}
	};

	render() {
		return (
			<div className='skinTypeContainer'>
				<h2 id='skinQuestion'> What is your skin type? </h2>
				<div className='grid'>
					<div>
						<Link id='skinBox1' to='allBurn' delay={1000} smooth={true}>
							<button
								className='skinType'
								id='skinType1'
								onClick={this.onPress}>
								{' '}
								SkinType 1{' '}
							</button>
						</Link>
						<div className='boxText1'>
							<h6>
								Very fair skin, white; red or blond hair; light-colored eyes;
								freckles likely
							</h6>
						</div>
					</div>
					<div>
						<Link id='skinBox2' to='allBurn' smooth={true}>
							<button
								className='skinType'
								id='skinType2'
								onClick={this.onPress}>
								{' '}
								SkinType 2{' '}
							</button>
						</Link>
						<div className='boxText2'>
							<h6>Fair skin, white; light eyes; light hair.</h6>
						</div>
					</div>
					<div>
						<Link id='skinBox3' to='allBurn' smooth={true}>
							<button
								className='skinType'
								id='skinType3'
								onClick={this.onPress}>
								{' '}
								SkinType 3{' '}
							</button>
						</Link>
						<div className='boxText3'>
							<h6>
								{' '}
								Fair skin, cream white; any eye or hair color (very common skin
								type){' '}
							</h6>
						</div>
					</div>
					<div>
						<Link id='skinBox4' to='allBurn' smooth={true}>
							<button
								className='skinType'
								id='skinType4'
								onClick={this.onPress}>
								{' '}
								SkinType 4{' '}
							</button>
						</Link>
						<div className='boxText4'>
							<h6>
								{' '}
								Olive skin, typical Mediterranean Caucasian skin; dark brown
								hair; medium to heavy pigmentation{' '}
							</h6>
						</div>
					</div>
					<div>
						<Link id='skinBox5' to='allBurn' smooth={true}>
							<button
								className='skinType'
								id='skinType5'
								onClick={this.onPress}>
								{' '}
								SkinType 5{' '}
							</button>
						</Link>
						<div className='boxText5'>
							<h6>
								Brown skin, typical Middle Eastern skin; dark hair; rarely sun
								sensitive
							</h6>
						</div>
					</div>
					<div>
						<Link id='skinBox6' to='allBurn' smooth={true}>
							<button
								className='skinType'
								id='skinType6'
								onClick={this.onPress}>
								{' '}
								SkinType 6{' '}
							</button>
						</Link>
						<div className='boxText6'>
							<h6> Black skin; rarely sun sensitive</h6>
						</div>
					</div>
				</div>
				<div className='allBurn'>
					{this.state.showBurnTime1 && (
						<h3 className='uvInfo' id='burnTimeOne'>
							{' '}
							The UV Level is currently at {this.state.uvIndex.result.uv},
							meaning as a VERY fair skinned individual, you will burn in{' '}
							{this.state.uvIndex.result.safe_exposure_time.st1} minutes
						</h3>
					)}

					{this.state.showBurnTime2 && (
						<h3 className='uvInfo' id='burnTimeTwo'>
							{' '}
							The UV Level is currently at {this.state.uvIndex.result.uv},
							meaning as a fair skinned individual, you will burn in{' '}
							{this.state.uvIndex.result.safe_exposure_time.st2} minutes{' '}
						</h3>
					)}
					{this.state.showBurnTime3 && (
						<h3 className='uvInfo' id='burnTimeThree'>
							{' '}
							The UV Level is currently at {this.state.uvIndex.result.uv},
							meaning as a creamed skinned individual, you will burn in{' '}
							{this.state.uvIndex.result.safe_exposure_time.st3} minutes{' '}
						</h3>
					)}
					{this.state.showBurnTime4 && (
						<h3 className='uvInfo' id='burnTimeFour'>
							The UV Level is currently at {this.state.uvIndex.result.uv},
							meaning as an olive skinned individual, you will burn in{' '}
							{this.state.uvIndex.result.safe_exposure_time.st4} minutes
						</h3>
					)}
					{this.state.showBurnTime5 && (
						<h3 className='uvInfo' id='burnTimeFive'>
							{' '}
							The UV Level is currently at {this.state.uvIndex.result.uv},
							meaning as an brown skinned individual, you will burn in{' '}
							{this.state.uvIndex.result.safe_exposure_time.st5} minutes{' '}
						</h3>
					)}
					{this.state.showBurnTime6 && (
						<h3 className='uvInfo' id='burnTimeSix'>
							{' '}
							The UV Level is currently at {this.state.uvIndex.result.uv},
							meaning as an black skinned individual, you will burn in{' '}
							{this.state.uvIndex.result.safe_exposure_time.st6} minutes{' '}
						</h3>
					)}
				</div>
			</div>
		);
	}
}

export default UVIndex;
