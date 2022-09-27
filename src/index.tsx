import React, {useEffect} from 'react';
import ReactDOM          from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import 'react-app-polyfill/stable';

import './index.css';

import reportWebVitals from './reportWebVitals';

import App from './App';

// import PDC from './lib/platformDependencyCall';
// import AVPlayService from "./services/AVPlayService";
import {init } from '@noriginmedia/norigin-spatial-navigation';

window.onload = () => {
/*
    PDC.registerKey();
    document.addEventListener("visibilitychange",function() {
        if( document.hidden ) AVPlayService.suspend()
        else AVPlayService.restore();
    });
*/
    init({
        debug:false,
        visualDebug: true
    })
};

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
    , document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
