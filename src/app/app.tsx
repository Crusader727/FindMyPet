import {awd} from "./app.scss";

import PublicationPreview from "../components/PublicationPreview/PublicationPreview";
import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export class App extends React.Component {
    public render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route
                        path="/"
                        component={PublicationPreview}
                    />
                </Switch>
            </BrowserRouter>
        );
    }
}
