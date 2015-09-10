import React from 'react';
import { DDMMMYYYY, paidThisMonth } from './../utils/date.utils.js';
import { formatCurrency } from './../utils/money.utils.js';
import numeral from 'numeral';
import _ from 'lodash';

var Payoff = React.createClass({
	render() {
		return (
			<div className="row">
				<div className="cell">{this.props.bill.name}</div>
				<div className="cell">{this.props.bill.payoff}</div>
			</div>
		)
	}
})

module.exports = Payoff;