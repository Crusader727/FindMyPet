import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Feed } from "pages/feed";

import { awd } from "./app.scss";

export class App extends React.Component {
    public render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route
                        path="/"
                        component={Feed}
                    />
                </Switch>
            </BrowserRouter>
        );
    }
}
