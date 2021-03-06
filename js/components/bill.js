import React from 'react';
import { DDMMMYYYY, paidThisMonth } from './../utils/date.utils.js';
import { formatCurrency } from './../utils/money.utils.js';
import _ from 'lodash';

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

	getPaidDOM(bill, months) {
		return months.map(month => {
			var paid = paidThisMonth(bill.pay_dates, month);
			if(paid) {
				return <div className="cell"><i className="fa fa-check"></i></div>;
			}
			return <div className="cell"></div>
		});
	},

	render() {
		var ExpandedBill = this.getExpandedDOM(this.props.bill);
		var paidDOM = this.getPaidDOM(this.props.bill, this.props.months);
		return (
			<div className="row" onClick={this.expand}>
				<div className="cell">{this.props.bill.name}</div>
				{paidDOM}
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