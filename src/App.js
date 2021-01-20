import React, { Component } from 'react';
import Home from './Home/Home';

const url1 = class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			apiUrl: {},
		};
	}

	getUVIndex() {
		var lat = $('#lat').val();
		var lng = $('#lng').val();
		var alt = $('#alt').val();
		var ozone = $('#ozone').val();
		var dt = $('#dt').val();

		$.ajax({
			type: 'GET',
			dataType: 'json',
			beforeSend: function (request) {
				request.setRequestHeader(
					'x-access-token',
					'7469fa7008ca4c729b71acc469c72468'
				);
			},
			url:
				'https://api.openuv.io/api/v1/uv?lat=' +
				lat +
				'&lng=' +
				lng +
				'&alt=' +
				alt +
				'&ozone=' +
				ozone +
				'&dt=' +
				dt,
			success: function (response) {
				//handle successful response
			},
			error: function (response) {
				// handle error response
			},
		});
	}

	render() {
		return (
			<div>
				<header>
					<Home />
				</header>
			</div>
		);
	}
};

export default App;
