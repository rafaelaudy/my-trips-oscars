import React from 'react';

import './tripCard.scss';

const TripCard = () => {
	return (
		<div className="trip-card-square mdl-card mdl-shadow--4dp">
			<div className="trip-card-title mdl-card__title mdl-card--expand">
				<h2 className="mdl-card__title-text">Veneza</h2>
			</div>
			<div className="mdl-card__supporting-text">
				Gondolas, pombas, multidāo e pasta (rica pasta).
			</div>
			<div className="trip-card-actions mdl-card__actions mdl-card--border">
				<button className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab">
					<i className="material-icons">edit</i>
				</button>
				<button className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab">
					<i className="material-icons">share</i>
				</button>
				<button className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab">
					<i className="material-icons">delete</i>
				</button>
			</div>
		</div>
	);
};

export default TripCard;