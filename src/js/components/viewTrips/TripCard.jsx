import React from 'react';

import './tripCard.scss';

import TripCardActions from './TripCardActions';

const TripCard = () => {
	return (
		<div className="trip-card-square mdl-card mdl-shadow--4dp">
			<div className="trip-card-title mdl-card__title mdl-card--expand">
				<h2 className="mdl-card__title-text">Veneza</h2>
			</div>
			<div className="mdl-card__supporting-text">
				Gondolas, pombas, multidāo e pasta (rica pasta).
			</div>
			<TripCardActions />
		</div>
	);
};

export default TripCard;