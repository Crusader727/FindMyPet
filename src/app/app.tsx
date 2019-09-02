import './app.scss';
import {awd} from './app.scss';

import * as React from "react";
import { BrowserRouter, Switch, Route, RouteComponentProps, Redirect } from 'react-router-dom'


export class App extends React.Component {
    public render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route
                        path='/'
                        render={() => <div className={awd}>awdawddaw</div>}
                    />
                </Switch>
            </BrowserRouter>
        );
    }
}