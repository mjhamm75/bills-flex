import React from 'react';
import Payoffs from './payoffs.js';
import BillStore from './../stores/bill.store.js';
var BillActions = require('./../actions/bill.actions.js');

function getBills() {
	return BillStore.getBills();
}

var PayoffsContainer = React.createClass({
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
				<h1>Payoff</h1>
				<Payoffs billsList={this.state.bills} />
			</div>
		)
	}
});

module.exports = PayoffsContainer;