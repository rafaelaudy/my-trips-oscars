import React from 'react';

export const Header = () => {
	return (
		<header className="mdl-layout__header">
			<div className="mdl-layout__header-row">
				<span className="mdl-layout-title">My trips oscars</span>
				<div className="mdl-layout-spacer"></div>
				<a className="mdl-navigation__link" href="#">Create</a>
				<a className="mdl-navigation__link" href="#">View</a>
			</div>
		</header>
	);
};