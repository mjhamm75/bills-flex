import moment from 'moment';

export function DDMMMYYYY(iso) {
	if(iso) {
		return moment(iso).format('DD MMM YYYY')		
	} else {
		return "unknown";
	}
}

export function getPaymentMonthsNames() {
	var months = [];
	var today = moment();
	var next = moment().add(1, 'month');
	var previous = moment().subtract(1, 'month');
	months.push(previous.format('MMM'), today.format('MMM'), next.format('MMM'))
	return months;
}