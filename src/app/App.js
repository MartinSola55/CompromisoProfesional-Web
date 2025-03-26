import { LocalStorage } from '@app';
import { Roles } from '@constants/Roles';

export const isLoggedIn = () => {
	if (!LocalStorage.getUserId()) return false;

	const sessionExpiration = new Date(LocalStorage.getSessionExpiration());

	if (!sessionExpiration) return false;

	if (new Date() > sessionExpiration) {
		LocalStorage.clearSessionData();
		return false;
	}

	return true;
};

export const isAdmin = () => {
	const role = LocalStorage.getUserRole();
	return role && role === Roles.Admin;
};

export const isEmployee = () => {
	const role = LocalStorage.getUserRole();
	return role && role === Roles.Employee;
};