import React from 'react';

import './viewTrips.scss';

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