import moment from 'moment';

export function DDMMMYYYY(iso) {
	if(iso) {
		return moment(iso).format('DD MMM YYYY')		
	} else {
		return "unknown";
	}
}

export function getPaymentMonths() {
	var months = [];
	var today = moment();
	var next = moment().add(1, 'month');
	var previous = moment().subtract(1, 'month');
	months.push({
		name: previous.format('MMM'),
		index: previous.month()
	},
	{
		name: today.format('MMM'),
		index: today.month()
	},
	{
		name: next.format('MMM'),
		index: next.month()
	})
	return months;
}

export function paidThisMonth(payDates, month) {
	return payDates.some(date => {
		return moment(date.pay_date).month() === month.index;
	});
}