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
					<li>
						<div className="flex-container">
							<div className="bill-width">{DDMMMYYYY(date.pay_date)}</div>
							<div className="bill-width">{formatCurrency(date.payment)}</div>
						</div>
					</li>
				)
			});
			return (
				<ul>
					{payDates}
				</ul>
			)			
		} else {
			return null;
		}
	},

	render() {
		var ExpandedBill = this.getExpandedDOM(this.props.bill);
		return (
			<li>
				<div className="flex-container-col" onClick={this.expand}>
					<div className="flex-container">
						<div className="bill-width">{this.props.bill.name}</div>
						<div className="bill-width">{formatCurrency(this.props.bill.payoff)}</div>
					</div>
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