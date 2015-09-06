import numeral from 'numeral';

export function formatCurrency(amount) {
	return numeral(amount).format('$0,0.00')
}