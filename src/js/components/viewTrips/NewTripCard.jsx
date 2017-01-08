import React from 'react';

import './tripCard.scss';
import './newTripCard.scss';

const NewTripCard = () => {
	const add = () => {
		alert('open new page');
	};

	return (
		<div className="trip-card-square mdl-card mdl-shadow--4dp">
			<div className="mdl-card__title mdl-card--expand">
				<button id="newCardAdd" onClick={add} className="new-trip-card-icon mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect">
					<i className="material-icons">add</i>
				</button>
				<div className="mdl-tooltip mdl-tooltip--large" data-mdl-for="newCardAdd">
					Add a new trip!
				</div>
			</div>
		</div>
	);
};

export default NewTripCard;