import React from 'react';

import './tripCard.scss';

export const TripCard = () => {
	return (
		<div className="trip-card-square mdl-card mdl-shadow--4dp">
			<div className="mdl-card__title mdl-card--expand">
				<h2 className="mdl-card__title-text">Veneza</h2>
			</div>
			<div className="mdl-card__supporting-text">
				Gondolas, pombas, multidāo e pasta (rica pasta).
			</div>
			<div className="mdl-card__actions mdl-card--border">
				<a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
				Ver oscars!
				</a>
			</div>
		</div>
	);
};