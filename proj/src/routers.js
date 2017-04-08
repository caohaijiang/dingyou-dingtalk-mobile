import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-keeper'

import PageHome from 'pages/home/';

class App extends React.Component {
    render() { 
        return ( <div> {
            this.props.children
        } </div> );
    }
}

const rootRoute = <HashRouter><div>    
    <Route name="app" path="/" component={ App } >
        <PageHome.route />
    </Route>
</div></HashRouter>

ReactDOM.render( rootRoute, document.getElementById('App') );
