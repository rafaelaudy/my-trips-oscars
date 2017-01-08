import React from 'react';

import './tripList.scss';

import TripCard from './TripCard';
import NewTripCard from './NewTripCard';

const Triplist = (props) => {
	const { trips } = props;

	const tripCards = [];
	trips.forEach(function(trip, index) {
		const { title, description, picture } = trip;
		tripCards.push(<TripCard key={index} index={index} title={title} description={description} picture={picture}/>);
	});

	return (
        <div className="mdl-grid tripList">
            <NewTripCard />
            {tripCards}
        </div>
	);
};

Triplist.propTypes = {
	trips: React.PropTypes.array.isRequired
};

export default Triplist;