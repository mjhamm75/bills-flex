import numeral from 'numeral';

export function formatCurrency(amount) {
	return numeral(amount).format('$0,0.00')
}

export function getTotal(bills) {
	var total = 0;
	bills.forEach(bill => {
		total += parseFloat(bill.payoff)
	})
	return total;
}