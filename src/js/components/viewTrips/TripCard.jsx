import React from 'react';

import './tripCard.scss';

import TripCardActions from './TripCardActionsContainer';

const TripCard = (props) => {
	const {title, description, index} = props;

	return (
		<div className="trip-card-square mdl-card mdl-shadow--4dp">
			<div className="trip-card-title mdl-card__title mdl-card--expand">
				<h2 className="mdl-card__title-text">
					{title}
				</h2>
			</div>
			<div className="mdl-card__supporting-text">
				{description}
			</div>
			<TripCardActions index={index}/>			
		</div>
	);
};

TripCard.propTypes = {
	index: React.PropTypes.number.isRequired,
	title: React.PropTypes.string.isRequired,
	description: React.PropTypes.string.isRequired
};

export default TripCard;