import { DateHelper } from "@app";
import { Roles } from "@constants/Roles";

export const formatComboItems = (items) => {
	return items.map((item) => ({
		value: item.id,
		label: item.description,
	}));
};

export const formatCurrency = (value, includeDecimals = true) => {
	if (value === null || value === undefined)
		return '';

	if (value < 0)
		return `-$${Math.abs(value).toLocaleString('es-AR', {
			minimumFractionDigits: includeDecimals ? 2 : 0,
			maximumFractionDigits: includeDecimals ? 2 : 0,
		})}`;

	return `$${value.toLocaleString('es-AR', {
		minimumFractionDigits: includeDecimals ? 2 : 0,
		maximumFractionDigits: includeDecimals ? 2 : 0,
	})}`;
};

export const getRoleName = (role) => {
	switch (role?.toUpperCase()) {
		case Roles.Admin:
			return 'Admin';
		case Roles.Employee:
			return 'Prestador';
		default:
			return 'Desconocido';
	}
};

export const getMonthName = (period) => {
	const [year, month] = period.split('-');
	const date = new Date(year, month - 1);
	const monthName = date.toLocaleString('es-ES', { month: 'long' });

	return monthName.charAt(0).toUpperCase() + monthName.slice(1);
};

export const buildGenericGetAllRq = (sort, currentPage, dateRange) => {
	const rq = {
		page: currentPage,
	};

	if (sort && sort.column) {
		rq.columnSort = sort.column;
		rq.sortDirection = sort.direction;
	}
	if (dateRange && dateRange.from && dateRange.to) {
		rq.dateFrom = DateHelper.formatDate(dateRange.from);
		rq.dateTo = DateHelper.formatDate(dateRange.to);
	}

	return rq;
};

export const validateInt = (value) => {
	const parsedValue = parseInt(value);
	return value === null || !isNaN(parsedValue);
};

export const validateDecimal = (value) => {
	const parsedValue = parseFloat(value);
	return value === null || !isNaN(parsedValue);
};

export const debounce = (func, delay) => {
	let timeoutId;
	return (...args) => {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => {
			func(...args);
		}, delay);
	};
};