import { connect } from 'react-redux';

import TripList from './TripList';

const mapStateToProps = (state) => {
	const { trips } = state;
	return { trips };
};

export default connect(mapStateToProps)(TripList);