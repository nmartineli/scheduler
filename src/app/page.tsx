'use client';

import { useEffect, useState } from 'react';
import Calendar from './components/Calendar';
import Profile from './components/Profile';
import { ProfileProps } from '@/types';
import Loading from './components/Loading';

export default function Home() {
	const [profile, setProfile] = useState<ProfileProps>();

	useEffect(() => {
		fetch('/api/profile')
			.then((res) => res.json())
			.then((data) => {
				setProfile(data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<main className="bg-primary-lightest min-h-screen">
			{profile ? (
				<div className="flex flex-col items-center justify-between mx-auto py-4 px-8 sm:p-12 lg:w-4/5 lg:flex-row lg:content-start gap-10">
					<Profile {...profile} />
					<Calendar {...profile} />
				</div>
			) : (
				<div className="grid place-content-center min-h-screen">
					<Loading />
				</div>
			)}
		</main>
	);
}
