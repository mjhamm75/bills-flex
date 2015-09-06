import { isoFetch } from './../utils/fetch.utils.js';
var BillDispatcher = require('./../dispatcher/bill.dispatcher.js');
import BillConstants from './../constants/bill.constants.js';

module.exports = {
	updateBills() {
		isoFetch('/bills').then(res => {
			BillDispatcher.handleViewAction({
				actionType: BillConstants.UPDATE_BILLS,
				bills: res
			});
		})
	}
}