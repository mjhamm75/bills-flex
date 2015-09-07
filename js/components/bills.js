import React from 'react';
import Bill from './bill.js';

export default class Bills extends React.Component {
	billDOM(bills) {
		return this.props.billsList.map(bill => {
			return <Bill key={bill.id} bill={bill} />
		})
	}
	render() {
		var bills = this.billDOM(this.props.bills);
		return (
			<div className="table">
				<div className="row">
					<div className="cell">Bill Name</div>
					<div className="cell">Amount</div>
				</div>
				{bills}
			</div>
		)
	}
}