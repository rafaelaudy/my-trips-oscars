import React from 'react';

import Header from './Header';
import Content from './Content';

export const App = () => {
	return (
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
            <Header />
            <Content />
        </div>
	);
};