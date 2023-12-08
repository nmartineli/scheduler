import { ScheduleProps } from '@/types';

export const getFilteredSchedule = (schedule: ScheduleProps[], firstDay: Number) => {
	let count = 0;
	return schedule.filter((obj) => {
		if (obj.day >= +firstDay && count < 4) {
			count++;
			return true;
		}
		return false;
	});
};
