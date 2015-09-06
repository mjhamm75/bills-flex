import _ from 'lodash';

export function getBills(knex) {
	return knex.from('bills').leftJoin('bills_paid_dates', 'bills.id', 'bills_paid_dates.bill_id');
}


export function sortBills(bills) {
	var results = [];
	bills.forEach(bill => {
		var index = _.findIndex(results, { id: bill.bill_id });
		if(index > -1) {
			var pay_date = {
				payment: bill.payment, 
				due_date: bill.due_date, 
				pay_date: bill.pay_date, 
				paid: bill.paid
			}
			results[index].pay_dates.push(pay_date);
		} else {
			var pay_date = {
				payment: bill.payment, 
				due_date: bill.due_date, 
				pay_date: bill.pay_date, 
				paid: bill.paid
			}
			results.push({
				id: bill.bill_id,
				name: bill.name,
				payoff: bill.payoff, 
				type: bill.type,
				pay_dates: [pay_date]
			});
		}
	});
	return results;
}