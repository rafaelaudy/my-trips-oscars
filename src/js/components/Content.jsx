import React from 'react';

import './content.scss';

import TripList from './TripList';

export const Content = () => {
	return (
        <main className="mdl-layout__content content">
            <TripList />
        </main>
	);
};