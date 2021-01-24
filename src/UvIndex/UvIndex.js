import React, { Component } from 'react';

class Userinput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputVal: '',
		};
	}

	render() {
		console.log(this.props.lat);
		return (
			<div>
				<h1> hello! </h1>
			</div>
		);
	}
}

export default Userinput;
