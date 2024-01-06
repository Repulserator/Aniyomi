import React, {Component} from 'react';

import reportWebVitals from './reportWebVitals'

import { createStore } from 'redux'

import { Provider } from 'react-redux'

import rootReducer from './redux/reducers'

import './assets/boxicons-2.0.7/css/boxicons.min.css'
import './assets/css/grid.css'
import './assets/css/theme.css'
import './assets/css/index.css'

import Layout from './components/layout/Layout'

const store = createStore(
    rootReducer
)

document.title = 'Aniyomi'

export class Console extends Component {

    render() {
        return (
            <Provider store={store}>
                <React.StrictMode>
                    <Layout />
                </React.StrictMode>
            </Provider>
        );
    }


}

reportWebVitals();
