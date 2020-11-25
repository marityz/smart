import './App.css';

import React, { Component } from 'react';

import {
    Route,
    Switch,
    Redirect,
    withRouter
} from "react-router-dom";

import Home from "./Pages/Home";
import Create from "./Pages/Create";

class App extends Component{
    render() {
        const { history } = this.props;

        return (
            <div className="App">
                <Switch>
                    <Route history={history} path='/home' component={Home} />
                    <Route history={history} path='/create' component={Create} />
                    <Redirect from='/' to='/home'/>
                </Switch>
            </div>
        );
    }

}

export default withRouter(App)
