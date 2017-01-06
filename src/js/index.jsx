import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/layout/App';

import store from './store/store';

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
