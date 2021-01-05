import React from 'react';
import Home from './Home'

import { Switch, Route } from "react-router-dom";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
        </Switch>
    )
}

export default Routes;