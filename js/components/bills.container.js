import React from 'react';
import Bills from './bills.js';
import BillStore from './../stores/bill.store.js';
var BillActions = require('./../actions/bill.actions.js');

function getBills() {
	return BillStore.getBills();
}

var BillsContainer = React.createClass({
	componentWillMount: function() {
		BillStore.addChangeListener(this._onChange);
	},

	getInitialState: function() {
		BillActions.updateBills();
		return {
			bills: getBills()
		}
	},

	_onChange: function() {
		this.setState({
			bills: getBills()
		});
	},

	render: function() {
		return (
			<div className="bills">
				<h1>Bills Paid</h1>
				<Bills billsList={this.state.bills} />
			</div>
		)
	}
});

module.exports = BillsContainer;