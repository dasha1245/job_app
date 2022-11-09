import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

import './index.css';
import App from './App';
import {setUpStore} from "./redux";


const root = ReactDOM.createRoot(document.getElementById('root'));

const store = setUpStore();

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
);


