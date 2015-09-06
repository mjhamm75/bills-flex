import React from 'react';

var Bill = React.createClass({
	getInitialState() {
		return {
			expanded : false
		}
	},

	getExpandedDOM(bill) {
		if(this.state.expanded) {
			return <h1>Jason</h1>
		} else {
			return null;
		}
	},

	render() {
		var ExpandedBill = this.getExpandedDOM(this.props.bill);
		return (
			<li>
				<div className="flex-container" onClick={this.expand}>
					<div className="bill-width">{this.props.bill.name}</div>
					<div className="bill-width">{this.props.bill.payoff}</div>
					{ExpandedBill}
				</div>
			</li>
		)
	},

	expand() {
		this.setState({
			expanded : !this.state.expanded
		});
	}
})

module.exports = Bill;