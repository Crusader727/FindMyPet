import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from 'reducers';
import { AppState } from 'types/store';
import { App } from "./app";

function configureStore(initialState: AppState) {
    return createStore(rootReducer, initialState);
}

const store = configureStore({});

ReactDOM.render(
    (
        <Provider store={store}>
            <App />
        </Provider>
    ),
    document.getElementById("root"));
