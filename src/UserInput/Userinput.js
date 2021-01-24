import React, { Component } from 'react';

class Userinput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputVal: '',
		};
		this.onInputChange = this.onInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	// handle input change event
	onInputChange(e) {
		this.setState({ inputVal: e.target.value });
	}

	// handle button click event and pass data in parent
	handleSubmit() {
		this.setState({});
		this.props.handleInput(this.state.inputVal);
	}
	render() {
		return (
			<div>
				<input value={this.state.inputVal} onChange={this.onInputChange} />
				<input type='button' value='Submit' onClick={this.handleSubmit} />
			</div>
		);
	}
}

export default Userinput;
