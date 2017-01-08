import React from 'react';

import './content.scss';

import TripList from '../viewTrips/TripListContainer';

const Content = () => {
	return (
        <main className="mdl-layout__content content">
            <TripList />
        </main>
	);
};

export default Content;