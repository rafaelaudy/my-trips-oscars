import React from 'react';
import { connect } from 'react-redux';

import './tripCardActions.scss';

const TripCardActions = (props) => {
	const { remove, index } = props;
	const onEdit = () => {
		alert('edit');
	}
	const onShare = () => {
		alert('share');
	}
	const onRemove = () => {
		remove(index);
	}

	return (
		<div className="trip-card-actions mdl-card__actions mdl-card--border">
			<button onClick={onEdit} className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab">
				<i className="material-icons">edit</i>
			</button>
			<button onClick={onShare} className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab">
				<i className="material-icons">share</i>
			</button>
			<button onClick={onRemove} className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab">
				<i className="material-icons">delete</i>
			</button>
		</div>
	);
};

TripCardActions.propTypes = {
	remove: React.PropTypes.func.isRequired,
	index: React.PropTypes.number.isRequired
};

const mapDispatchToProps = (dispatch) => ({
	remove: (index) => {
		dispatch({
			type: 'DELETE',
			payload: index
		});
	}
});

export default connect(undefined, mapDispatchToProps)(TripCardActions);