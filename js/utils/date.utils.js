import moment from 'moment';

export function DDMMMYYYY(iso) {
	if(iso) {
		return moment(iso).format('DD MMM YYYY')		
	} else {
		return "unknown";
	}
}