var Dispatcher = require('flux').Dispatcher;
var BillDispatcher = new Dispatcher();

BillDispatcher.handleViewAction = function(action) {
		this.dispatch({
			source: 'VIEW_ACTION',
			action: action
		});
	};

module.exports = BillDispatcher;
