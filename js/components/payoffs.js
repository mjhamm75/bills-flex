import React from 'react';
import Payoff from './payoff.js';
import { getPaymentMonths } from './../utils/date.utils.js';
import { formatCurrency, getTotal } from './../utils/money.utils.js';

module.exports =  React.createClass({
	payoffDOM: function(bills, months) {
		var orderBy = this.state.orderBy;
		var ordered = this.props.billsList.sort((a, b) => {
			if(orderBy === "payoff") {
				return parseFloat(a[orderBy]) > parseFloat(b[orderBy]);				
			} else {
				return a[orderBy] > b[orderBy];
			}
		})
		return ordered.map(bill => {
			return <Payoff key={bill.id} bill={bill} months={months}/>
		})
	},

	getInitialState: function() {
		return {
			orderBy: 'name'
		}	
	},

	render: function() {
		var bills = this.props.billsList || [];
		var months = getPaymentMonths();
		var payoffs = this.payoffDOM(bills, months);
		var total = getTotal(bills);
		return (
			<div className="table">
				<div className="row table-header">
					<div className="cell" onClick={this.sort.bind(this, "name")}>Bill Name</div>
					<div className="cell" onClick={this.sort.bind(this, "payoff")}>Payoff Amount</div>					
				</div>
				{payoffs}
				<div className="row">
					<div className="cell table-header">Total</div>
					<div className="cell">{formatCurrency(getTotal(bills))}</div>
				</div>
			</div>
		)
	},
	sort: function(orderBy) {
		this.setState({
			orderBy: orderBy
		})
	}
});