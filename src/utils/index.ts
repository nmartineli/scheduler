import { ScheduleProps } from '@/types';

export const getFilteredSchedule = (schedule: ScheduleProps[], firstDay: number) => {
	let count = 0;
	return schedule.filter((obj) => {
		if (obj.day >= firstDay && count < 4) {
			count++;
			return true;
		}
		return false;
	});
};

export const formatCurrency = (value: number, locale: string, currency: string) =>
	new Intl.NumberFormat(locale, { style: 'currency', currency: currency }).format(value);
