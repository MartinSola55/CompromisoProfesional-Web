export const formatDate = (dateString) => {
	const date = new Date(dateString);
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const day = String(date.getDate()).padStart(2, '0');
	return `${year}-${month}-${day}T00:00:00Z`;
};

export const getToday = (returnString = false) => {
	const today = new Date();
	return returnString ? formatDate(today) : today;
};

export const getTomorrow = (date, returnString = false) => {
	let today = date ? new Date(date) : new Date();
	const tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
	return returnString ? formatDate(tomorrow) : tomorrow;
};

export const getLastWeek = () => {
	const today = new Date();
	const lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
	return formatDate(lastWeek);
};

export const getPreviousWeek = (day) => {
	const date = new Date(day);
	const lastWeek = new Date(date.getFullYear(), date.getMonth(), date.getDate() - 7);
	return formatDate(lastWeek);
};

export const adjustDate = (date) => {
	const newDate = new Date(date);
	newDate.setHours(0, 0, 0, 0);
	return newDate.toISOString();
};