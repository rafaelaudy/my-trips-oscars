import React from 'react';

import './tripList.scss';

import TripCard from './TripCard';

const Triplist = () => {
	return (
        <div className="mdl-grid tripList">
            <TripCard />
            <TripCard />
            <TripCard />
        </div>
	);
};

export default Triplist;