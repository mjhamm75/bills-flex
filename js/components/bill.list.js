import React from 'react';

export default class BillList extends React.Component {
	render() {
		var bills = this.props.bills.map(bill => {
			return <li>{bill.name}</li>
		});
		return (
			<ul>
				{bills}
			</ul>
		)
	}
}