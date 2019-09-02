import './app.scss';

import * as React from "react";
import { BrowserRouter, Switch, Route, RouteComponentProps, Redirect } from 'react-router-dom'


export class App extends React.Component {
    public render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route
                        path='/'
                        render={() => <div/>}
                    />
                </Switch>
            </BrowserRouter>
        );
    }
}