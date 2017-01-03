import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store/store';

import App from './components/App';

render(
    <App />,
    document.getElementById('root')
);
