export interface ProfileProps {
    id: string;
    name: string;
    occupation: string;
    area: string;
    country: string;
    city: string;
    stars: string;
    reviews: string;
    pricePerSession: string;
    timePerSession: string;
    photo: string;
    description: string
  }

  interface DateProps {
    date: string;
  }

  export interface ScheduleProps {
    id: string;
    schedule: Array<DateProps>;
  }
