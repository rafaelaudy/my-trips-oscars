import { connect } from 'react-redux';

import TripCardActions from './TripCardActions';

const mapDispatchToProps = (dispatch) => ({
	remove: (index) => {
		dispatch({
			type: 'DELETE',
			payload: index
		});
	}
});

export default connect(undefined, mapDispatchToProps)(TripCardActions);