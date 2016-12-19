import React from 'react';

import './content.scss';

import TripList from './TripList';

export default (props) => {
    return (
        <main className="mdl-layout__content content">
            <TripList />
        </main>
    );
};