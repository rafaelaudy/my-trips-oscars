import React from 'react';

import './tripList.scss';

import TripCard from './TripCard';

export default (props) => {
    return (
        <div className="mdl-grid viewTrips">
            <TripCard />
            <TripCard />
            <TripCard />
        </div>
    );
};