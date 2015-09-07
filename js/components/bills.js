import React from 'react';
import Bill from './bill.js';

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
		var bills = this.billDOM(this.props.bills);
		return (
			<div className="table">
				<div className="row">
					<div className="cell" onClick={this.sort.bind(this, "name")}>Bill Name</div>
					<div className="cell" onClick={this.sort.bind(this, "payoff")}>Amount</div>
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