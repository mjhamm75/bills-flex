import React from 'react';
import numeral from 'numeral';
import moment from 'moment';

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
							<div className="bill-width">{moment(date.pay_date).format('DD MMM YYYY')}</div>
							<div className="bill-width">{numeral(date.payment).format('$0,0.00')}</div>
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
						<div className="bill-width">{numeral(this.props.bill.payoff).format('$0,0.00')}</div>
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