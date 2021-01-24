import React, { Component } from 'react';

class UVIndex extends Component {
	constructor(props) {
		super(props);
		this.state = {
			uvIndex: '',
		};
	}

	componentDidMount() {
		const url = `https://api.openuv.io/api/v1/uv?lat${this.props.lat}=&lng=${this.props.long}&dt=2018-01-24T10:50:52.283Z`;

		console.log(url);

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
				<h1> hello! </h1>
			</div>
		);
	}
}

export default UVIndex;
