import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Components
import { PublicationPreview } from "components/publication-preview";

import { awd } from "./app.scss";

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
