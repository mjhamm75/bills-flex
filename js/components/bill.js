import React from 'react';
import { DDMMMYYYY } from './../utils/date.utils.js';
import { formatCurrency } from './../utils/money.utils.js';
import numeral from 'numeral';

var Bill = React.createClass({
	getInitialState() {
		return {
			expanded : false
		}
	},

	getExpandedDOM(bill) {
		if(this.state.expanded) {
			var payDates = bill.pay_dates.map(date => {
				return (
					<div key={bill.id}>
						<div className="cell-expanded">{DDMMMYYYY(date.pay_date)}</div>
						<div className="cell-expanded">{formatCurrency(date.payment)}</div>
					</div>
				)
			});
			return (
				<div className="row">
					{payDates}
				</div>
			)			
		} else {
			return null;
		}
	},

	render() {
		var ExpandedBill = this.getExpandedDOM(this.props.bill);
		return (
			<div className="row" onClick={this.expand}>
				<div className="cell">{this.props.bill.name}</div>
				<div className="cell">{formatCurrency(this.props.bill.payoff)}</div>
				{ExpandedBill}
			</div>
		)
	},

	expand() {
		this.setState({
			expanded : !this.state.expanded
		});
	}
})

module.exports = Bill;