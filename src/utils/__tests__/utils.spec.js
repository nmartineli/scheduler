import { describe } from 'node:test';
import { getFilteredSchedule, formatCurrency } from '../index';

describe('getFilteredSchedule', () => {
	it('Returns only four dates', () => {
		const mockScheduleData = [
			{
				year: 2023,
				month: 'Dec',
				day: 9,
				weekday: 'Thu',
				availability: [],
			},
			{
				year: 2023,
				month: 'Dec',
				day: 10,
				weekday: 'Thu',
				availability: [],
			},
			{
				year: 2023,
				month: 'Dec',
				day: 11,
				weekday: 'Thu',
				availability: [],
			},
			{
				year: 2023,
				month: 'Dec',
				day: 12,
				weekday: 'Thu',
				availability: [],
			},
			{
				year: 2023,
				month: 'Dec',
				day: 13,
				weekday: 'Thu',
				availability: [],
			},
			{
				year: 2023,
				month: 'Dec',
				day: 14,
				weekday: 'Thu',
				availability: [],
			},
			{
				year: 2023,
				month: 'Dec',
				day: 15,
				weekday: 'Thu',
				availability: [],
			},
			{
				year: 2023,
				month: 'Dec',
				day: 16,
				weekday: 'Thu',
				availability: [],
			},
		];
		const mockFirstDay = 10;

		const filteredSchedule = getFilteredSchedule(mockScheduleData, mockFirstDay);

		expect(filteredSchedule.length).toBe(4);
		expect(filteredSchedule[0].day).toEqual(mockFirstDay);
		expect(filteredSchedule[3].day).toEqual(mockFirstDay + 3);
	});

	it('Returns return an empty string if no value argument is provided', () => {
		const mockScheduleData = [];
		const mockFirstDay = 10;

		const filteredSchedule = getFilteredSchedule(mockScheduleData, mockFirstDay);

		expect(filteredSchedule.length).toBe(0);
	});
});

describe('formatCurrency', () => {
	it('Converts an value into currency when proper arguments are provided', () => {
		const mockValue = 300;
		const mockLocale = 'en-US';
		const mockCurrency = 'USD';

		const formatedCurrency = formatCurrency(mockValue, mockLocale, mockCurrency);

		expect(formatedCurrency).toEqual('$300.00');
	});
});
