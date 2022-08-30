import React from 'react';
import Image from 'next/image'

const Card = ({ name, email, id }) => {
	const src = `https://robohash.org/${id}?size=200x200`;
	return (
		<div className = 'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<Image loader={() => src} src={src} alt='robofriend' width={200} height={200}/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div> 
	);
}

export default Card;