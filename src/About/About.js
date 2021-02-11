import React from 'react';
import './About.css';
import { Link } from 'react-scroll';

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
				<h2> Welcome to Pasty Problems!</h2>
				<div class='content'>{this.props.children}</div>
				<div class='actions'>
					<div>
						<Link to='inputBox' spy={true} smooth={true}>
							<button class='toggle-button' onClick={this.onClose}>
								close
							</button>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}
