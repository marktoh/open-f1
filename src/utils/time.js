import moment from 'moment';

export const getFormattedTime = (date, time) => {
	if (date && time) return moment(`${date}T${time}`).format("LLLL");
	else if (!time) return moment(date).format("LL");
}