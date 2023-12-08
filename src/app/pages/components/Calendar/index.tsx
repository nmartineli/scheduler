import React, { useState } from 'react';
import { ProfileProps } from '@/types';
import { getFilteredSchedule } from '@/utils';
import Day from './components/Day';
import Booking from './components/Booking';

const Calendar: React.FC<ProfileProps> = (props) => {
	const { area, country, city, schedule } = props;

	const today = new Date();
	const [firstDay, setFirstDay] = useState<Number>(today.getDate());

	const filteredSchedule = getFilteredSchedule(schedule, firstDay);

	return (
		<>
			<div>
				<div>
					<h3>Schedule your session!</h3>
					<p>Timezone: {city} (+1)</p>
				</div>
				<div className="flex flex-row">
					<div>navigation</div>
					{filteredSchedule && filteredSchedule.map((date) => <Day key={date.day} {...date} />)}
					<div>navigation</div>
				</div>
				<div className="flex flex-row">
					{filteredSchedule && filteredSchedule.map((date) => <Booking key={date.day} {...date} />)}
				</div>
			</div>
		</>
	);
};

export default Calendar;
