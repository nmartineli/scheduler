import React, { useEffect, useState } from 'react';
import { ProfileProps, ScheduleProps } from '@/types';
import { getFilteredSchedule } from '@/utils';
import { SlArrowLeftCircle, SlArrowRightCircle } from 'react-icons/sl';

import Day from './components/Day';
import Booking from './components/Booking';

const Calendar: React.FC<ProfileProps> = (props) => {
	const { area, country, city, schedule } = props;

	const today = new Date();
	const [firstDay, setFirstDay] = useState<number>(today.getDate());
	const [filteredSchedule, setFilteredSchedule] = useState<ScheduleProps[]>([]);
	const [timezone, setTimezone] = useState<string>();

	useEffect(() => {
		const updateSchedule = getFilteredSchedule(schedule, firstDay);
		setFilteredSchedule(updateSchedule);
	}, [firstDay, schedule]);

	useEffect(() => {
		fetch(`http://worldtimeapi.org/api/timezone/${area}/${city}`)
			.then((res) => res.json())
			.then((data) => {
				setTimezone(data.utc_offset);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [area, country, city]);

	const getFutureDates = () => {
		setFirstDay(firstDay + 1);
	};

	const getPastDates = () => {
		if (firstDay > today.getDate()) {
			setFirstDay(firstDay - 1);
		}
	};

	const disabledButton = firstDay <= today.getDate() ? true : false;
	const disabledStyle = 'cursor-not-allowed opacity-50';

	return (
		<>
			{timezone ? (
				<section className="bg-grayscale-white p-4 mx-2 rounded-lg drop-shadow-md lg:w-1/2">
					<div className="w-full">
						<div className="bg-primary-darkest px-1 py-2 rounded-t-lg">
							<h3 className="w-max mx-auto font-bold text-grayscale-white text-base">Schedule your session!</h3>
							<p className="w-max mx-auto font-bold text-grayscale-white text-xs">
								Timezone: {city} ({timezone})
							</p>
						</div>
						<div className="flex flex-row items-center w-max mx-auto gap-1 my-2">
							<button
								className={`px-2 ${disabledButton ? disabledStyle : null}`}
								onClick={() => {
									getPastDates();
								}}
								disabled={disabledButton}
							>
								<SlArrowLeftCircle />
							</button>
							{filteredSchedule && filteredSchedule.map((date) => <Day key={date.day} {...date} />)}
							<button
								className="px-2"
								onClick={() => {
									getFutureDates();
								}}
							>
								<SlArrowRightCircle />
							</button>
						</div>
					</div>

					<div className="flex flex-row items-center w-max mx-auto gap-2 px-5 my-2 max-h-96 overflow-y-scroll lg:pl-8 lg:pr-3 lg:gap-1">
						{filteredSchedule && filteredSchedule.map((date) => <Booking key={date.day} {...date} />)}
					</div>
				</section>
			) : null}
		</>
	);
};

export default Calendar;
