import React from 'react';

import './tripCardActions.scss';

const TripCardActions = () => {
	return (
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
	);
};

export default TripCardActions;