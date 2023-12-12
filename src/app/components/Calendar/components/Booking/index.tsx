import { ScheduleProps } from '@/types';
import React from 'react';

const Booking: React.FC<ScheduleProps> = (date) => {
	const availableStyle =
		'bg-primary-lightest ring-inset ring-primary-darkest hover:ring-1 focus:ring-1 focus:ring-primary-darkest';
	const unavailableStyle = 'bg-grayscale-light text-grayscale-medium';

	return (
		<div className="flex flex-col max-h-96">
			{date.availability.map((availability) => (
				<div
					key={availability.time}
					className={`border px-3 py-2 my-1 rounded-lg text-xs lg:text-base
					${availability.available ? availableStyle : unavailableStyle}`}
				>
					<input type="radio" id={availability.time} name="schedule" value={availability.time} className="hidden peer " />
					<label htmlFor={availability.time}>{availability.time}</label>
				</div>
			))}
		</div>
	);
};

export default Booking;
