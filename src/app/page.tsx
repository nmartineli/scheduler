'use client';

import { useEffect, useState } from 'react';
import Calendar from './pages/components/Calendar';
import Profile from './pages/components/Profile';
import { ProfileProps } from '@/types';

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

	return profile ? (
		<main className="flex min-h-screen flex-row items-center justify-between p-24">
			<Profile {...profile} />
			<Calendar {...profile} />
		</main>
	) : (
		<>
			<h3>Loading</h3>
		</>
	);
}
