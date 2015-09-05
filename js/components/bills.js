import React from 'react';
import { isoFetch } from './../utils/fetch.utils.js';

export default class Bills extends React.Component {
	constructor(props) {
		super(props)
		isoFetch('http://localhost:3000/bills').then(res => {
			console.log(res);
		})
	}
	render() {
		return (
			<div className="bills">
				<h1>Bills</h1>
				<ul>
					<li>Bill 1</li>
					<li>Bill 2</li>
					<li>Bill 3</li>
					<li>Bill 4</li>
					<li>Bill 5</li>
				</ul>
			</div>
		)
	}
}