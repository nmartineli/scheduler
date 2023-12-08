import { ProfileProps } from '@/types';
import React from 'react';

const Profile: React.FC<ProfileProps> = (props) => {
	return (
		<>
			<div>
				<img src="" alt="" />
				<div>
					<h1>name</h1>
					<div>
						<h2>occupation</h2>
						<h3>city</h3>
					</div>
					<div>
						<div>stars</div>
						<p>reviews</p>
					</div>
					<div>
						<p>price</p>
						<p>time</p>
					</div>
				</div>
			</div>
			<div>
				<p>description</p>
			</div>
		</>
	);
};

export default Profile;
