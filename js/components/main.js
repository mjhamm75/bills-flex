import React from 'react';
import Header from './header.js';

export default class Main extends React.Component {
	render() {
		return (
			<div className="flex-container-col">
				<Header />
				<div className="flex-container center">
					{this.props.children}
				</div>				
			</div>
		)
	}
}