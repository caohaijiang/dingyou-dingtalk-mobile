import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-keeper'

import PageHome from 'pages/home/';

const rootRoute =
    <HashRouter>
        <PageHome.route />
    </HashRouter>;

ReactDOM.render( rootRoute, document.getElementById('App') );
