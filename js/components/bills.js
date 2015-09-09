import React from 'react';
import Bill from './bill.js';
import { getPaymentMonths } from './../utils/date.utils.js';

module.exports =  React.createClass({
	billDOM: function(bills) {
		var orderBy = this.state.orderBy;
		var ordered = this.props.billsList.sort((a, b) => {
			if(orderBy === "payoff") {
				return parseFloat(a[orderBy]) > parseFloat(b[orderBy]);				
			} else {
				return a[orderBy] > b[orderBy];
			}
		})
		return ordered.map(bill => {
			return <Bill key={bill.id} bill={bill} />
		})
	},

	getInitialState: function() {
		return {
			orderBy: 'name'
		}	
	},

	render: function() {
		var months = getPaymentMonths();
		var bills = this.billDOM(this.props.bills);
		return (
			<div className="table">
				<div className="row table-header">
					<div className="cell" onClick={this.sort.bind(this, "name")}>Bill Name</div>
					<div className="cell" onClick={this.sort.bind(this, "payoff")}>Amount</div>
					<div className="cell">{months[0]}</div>
					<div className="cell">{months[1]}</div>
					<div className="cell">{months[2]}</div>
				</div>
				{bills}
			</div>
		)
	},
	sort: function(orderBy) {
		this.setState({
			orderBy: orderBy
		})
	}
});