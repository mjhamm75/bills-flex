import React from 'react';

export default class Bill extends React.Component {
	render() {
		return (
			<li>
				<div className="flex-container">
					<div>{this.props.bill.name}</div>
					<div>{this.props.bill.payoff}</div>
				</div>
			</li>
		)
	}
}