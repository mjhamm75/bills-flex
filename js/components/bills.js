import React from 'react';
import BillList from './bill.list.js';
import BillStore from './../stores/bill.store.js';
var BillActions = require('./../actions/bill.actions.js');

function getBills() {
	return BillStore.getBills();
}

var Bills = React.createClass({
	componentWillMount: function() {
		BillStore.addChangeListener(this._onChange);
	},

	getInitialState: function() {
		BillActions.updateBills();
		return {
			bills: []
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
				<h1>Bills</h1>
				<BillList bills={this.state.bills} />
			</div>
		)
	}
});

module.exports = Bills;