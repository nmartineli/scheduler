import { ScheduleProps } from '@/types';
import React from 'react';

const Date: React.FC<ScheduleProps> = (date) => {
	return (
		<div className="px-2 py-1 text-center border rounded-lg drop-shadow-md">
			<p className="font-bold text-grayscale-dark text-xs">{date.weekday}</p>
			<p className="font-bold text-grayscale-dark text-sm lg:text-base">
				{date.month} {date.day}
			</p>
		</div>
	);
};

export default Date;
