import React from 'react';

import './tripList.scss';

import TripCard from './TripCard';

export const Triplist = () => {
	return (
        <div className="mdl-grid tripList">
            <TripCard />
            <TripCard />
            <TripCard />
        </div>
	);
};