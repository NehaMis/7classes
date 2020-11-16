import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import Transactions from "./Transactions";
import Logout from "./Logout";

class Routing extends Component {
    constructor(props) {
        super(props);
        this.pageRoute = [
            { url: "/", component_name: Transactions },
            { url: "/transactions/", component_name: Transactions },
            { url: "/logout/", component_name: Logout },
        ];
    }

    render() {
        const routes = this.pageRoute.map((objRoute, i) => {
           // if ("/" === objRoute.url) {
            return <Route exact path={objRoute.url} key={i} component={withRouter(objRoute.component_name)} />;
          //     return <Route path={objRoute.url + "/"} key={i} component={withRouter(objRoute.component_name)} />;
           //// }
        });

        return (
            <div id="dynamic_page" className="container-fluid">
                <Switch>
                    {routes}
                </Switch>
            </div>
        );
    }
}

export default Routing;
