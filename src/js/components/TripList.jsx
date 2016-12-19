import React from 'react';

import './tripList.scss';

import TripCard from './TripCard';

export default (props) => {
    return (
        <div className="mdl-grid tripList">
            <TripCard />
            <TripCard />
            <TripCard />
        </div>
    );
};