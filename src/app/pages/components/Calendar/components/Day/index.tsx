import { ScheduleProps } from '@/types';
import React from 'react';

const Date: React.FC<ScheduleProps> = (date) => {
	return (
		<div>
			<p>{date.weekday}</p>
			<p>
				{date.month} {date.day}
			</p>
		</div>
	);
};

export default Date;
