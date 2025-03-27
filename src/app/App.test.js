import { describe, it, expect, beforeAll } from "vitest";
import { Roles } from "@constants/Roles";
import { formatComboItems, formatCurrency, getRoleName, validateDecimal, validateInt } from "./Helpers";

beforeAll(() => {
	global.HTMLCanvasElement.prototype.getContext = () => { };
});

describe('formatting', () => {
	it('should correctly format role names', () => {
		const admin = getRoleName(Roles.Admin);
		const employee = getRoleName(Roles.Employee);

		const expectedAdmin = 'Admin';
		const expectedEmployee = 'Prestador';

		expect(admin).toEqual(expectedAdmin);
		expect(employee).toEqual(expectedEmployee);
	});

	it('should correctly format combo items', () => {
		const intList = [
			{
				id: 1,
				description: 'Item 1',
			},
			{
				id: 2,
				description: 'Item 2',
			},
			{
				id: 3,
				description: 'Item 3',
			}
		];

		const intItems = formatComboItems(intList);

		const expectedInt = intList.map((item) => ({
			value: item.id,
			label: item.description,
		}));

		expect(intItems).toEqual(expectedInt);
	});

	it('should correctly format currencies', () => {
		const total = formatCurrency(1500);
		const negativeTotal = formatCurrency(-1500);

		const expected = '$1.500,00';
		const expectedNegative = '-$1.500,00';

		expect(total).toEqual(expected);
		expect(negativeTotal).toEqual(expectedNegative);
	});
});

describe('validations', () => {
	it('should correctly validate an int', () => {
		const isInt = validateInt(1500);
		const isInt2 = validateInt('hello');

		expect(isInt).toEqual(true);
		expect(isInt2).toEqual(false);
	});

	it('should correctly validate a decimal', () => {
		const isDecimal = validateDecimal(1500.25);
		const isDecimal2 = validateDecimal('hello');

		expect(isDecimal).toEqual(true);
		expect(isDecimal2).toEqual(false);
	});
});