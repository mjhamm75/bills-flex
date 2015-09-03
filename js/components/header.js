import React from 'react';

export default class Header extends React.Component {
	render() {
		return (
			<div className="header">
				<span>
					<a href="#/bills">Bills</a>
				</span>
				<span>
					<a href="#/payoff">Payoff</a>
				</span>
				<span>
					<a href="#/other">Other</a>
				</span>
			</div>
		)
	}
}