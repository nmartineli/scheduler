import { ProfileProps } from '@/types';
import { formatCash } from '@/utils';
import Image from 'next/image';
import React from 'react';

const Profile: React.FC<ProfileProps> = (props) => {
	const { name, occupation, city, description, stars, reviews, minutesPerSession, pricePerSession, locale, currency, photo } =
		props;

	const RenderStars = () => {
		const starsList = [];
		for (let i = 0; i < 5; i++) {
			i < parseFloat(stars)
				? starsList.push(<Image src={'/images/yellow-star.png'} alt={'yellow star'} width={12} height={12} />)
				: starsList.push(<Image src={'/images/gray-star.png'} alt={'gray star'} width={12} height={12} />);
		}
		return starsList;
	};

	const priceToShow = formatCash(parseFloat(pricePerSession), locale, currency);

	return (
		<section className="bg-grayscale-white p-6 rounded-lg">
			<div className="flex flex-col items-center sm:flex-row sm:w-max sm:mx-auto">
				<Image src={photo} className="rounded-full mr-3" alt={name} width={150} height={150} />
				<div>
					<h1 className="font-bold text-grayscale-dark text-xl text-center">{name}</h1>
					<div className="flex items-end divide-x w-max mx-auto">
						<h2 className="font-bold self-end text-primary-darkest text-sm pr-1 ">{occupation}</h2>
						<h3 className="font-light text-grayscale-black text-xs pl-1">{city}</h3>
					</div>
					<div className="flex items-center justify-end	 w-max mx-auto mt-1">
						<div className="flex gap-1">
							<RenderStars />
						</div>
						<p className="font-light text-grayscale-black text-xs pl-1">({reviews} reviews)</p>
					</div>
					<div className="flex items-end w-max mx-auto gap-1 mt-1">
						<p className="font-bold text-primary-dark text-base text-center">{priceToShow}</p>
						<p className="font-bold text-primary-dark text-base text-center">/ {minutesPerSession} minutes</p>
					</div>
				</div>
			</div>
			<p className="text-grayscale-dark text-base text-center mt-2"> {description}</p>
		</section>
	);
};

export default Profile;
