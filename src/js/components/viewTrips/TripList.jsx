import React from 'react';
import { connect } from 'react-redux';

import './tripList.scss';

import TripCard from './TripCard';
import NewTripCard from './NewTripCard';

const Triplist = (props) => {
    const { trips } = props;

    const tripCards = [];
    trips.forEach(function(trip, index) {
        const { title, description } = trip;
        tripCards.push(<TripCard key={index} index={index} title={title} description={description}/>);
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

const mapStateToProps = (state) => {
    const { trips } = state;
    return { trips }
};

export default connect(mapStateToProps)(Triplist);