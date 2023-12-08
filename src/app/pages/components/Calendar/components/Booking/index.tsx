import { ScheduleProps } from '@/types';
import React from 'react';

const Booking: React.FC<ScheduleProps> = (date) => {
	return (
		<div className="flex flex-col">
			{date.availability.map((availability) => (
				<div key={availability.time}>
					<p>{availability.time}</p>
				</div>
			))}
		</div>
	);
};

export default Booking;
