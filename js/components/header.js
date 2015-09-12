import React from 'react';

export default class Header extends React.Component {
	render() {
		return (
			<div className="header">
				<span>
					<button>Add Bill</button>
				</span>
				<span>
					<a href="#/bills">Bills</a>
				</span>
				<span>
					<a href="#/payoff">Payoff</a>
				</span>
				<span>
					<a href="#/about">About</a>
				</span>
			</div>
		)
	}
}