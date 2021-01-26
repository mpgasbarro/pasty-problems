import React from 'react';
import './About.css';

export default class About extends React.Component {
	onClose = (e) => {
		this.props.onClose && this.props.onClose(e);
	};
	render() {
		if (!this.props.showModal) {
			return null;
		}
		return (
			<div className='modal' id='modal'>
				<h2> Modal Window</h2>
				<div class='content'>{this.props.children}</div>
				<div class='actions'>
					<div>
						<button class='toggle-button' onClick={this.onClose}>
							close
						</button>
					</div>
				</div>
			</div>
		);
	}
}
