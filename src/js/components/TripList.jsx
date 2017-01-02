import React from 'react';

import './tripList.scss';

import TripCard from './TripCard';
import NewTripCard from './NewTripCard';

const Triplist = () => {
	return (
        <div className="mdl-grid tripList">
            <NewTripCard />
            <TripCard />
            <TripCard />
            <TripCard />
        </div>
	);
};

export default Triplist;