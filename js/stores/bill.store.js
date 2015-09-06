import { EventEmitter } from 'events';
import BillConstants from './../constants/bill.constants.js';
import BillDispatcher from './../dispatcher/bill.dispatcher.js';

var CHANGE_EVENT = "change";

var bills = [];
function _getBills() {
	return bills
}
function _setBills(billList) {
	bills = billList;
}

var BillStore = Object.assign(EventEmitter.prototype, {
	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},
	
	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},

	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},

	getBills: function() {
		return bills;
	},

	dispatcherIndex: BillDispatcher.register(payload => {
		var action = payload.action;
		switch(action.actionType) {
			case BillConstants.UPDATE_BILLS:
				_setBills(action.bills);
				break;
		}

		BillStore.emitChange();

		return true;
	})
})

export default BillStore;