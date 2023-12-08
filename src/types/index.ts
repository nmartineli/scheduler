interface AvailabilityProps {
	time: string;
	available: boolean;
}

export interface ScheduleProps {
	year: number;
	month: string;
	day: number;
	weekday: string;
	availability: Array<AvailabilityProps>;
}

export interface ProfileProps {
	id: number;
	name: string;
	occupation: string;
	area: string;
	country: string;
	city: string;
	stars: string;
	reviews: string;
	pricePerSession: string;
	currency: string;
	minutesPerSession: string;
	photo: string;
	description: string;
	schedule: Array<ScheduleProps>;
}
