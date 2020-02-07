import * as React from 'react';
import { Switch, Route } from "react-router-dom";

import Login from '../authentication/Login';
import ToDo from '../toDo/ToDo';

export default () => (
    <Switch>
            <Route exact path="/">
                <h1>Home</h1>
            </Route>
            <Route path="/todo">
                <ToDo />
            </Route>
            <Route path="/sign-in" component={Login} />
            <Route path="/register" component={Login} />
    </Switch>
)