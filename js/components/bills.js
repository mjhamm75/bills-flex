import React from 'react';
import Bill from './bill.js';

export default class BillList extends React.Component {
	billDOM(bills) {
		return this.props.bills.map(bill => {
			return <Bill key={bill.id} bill={bill} />
		})
	}
	render() {
		var bills = this.billDOM(this.props.bills);
		return (
			<ul>
				{bills}
			</ul>
		)
	}
}