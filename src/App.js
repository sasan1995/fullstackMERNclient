import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./config/routes";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          {routes.map((route, index) => (
            <RouteWhitSubRoutes key={index} {...route} />
          ))}
        </Switch>
      </Router>
    </div>
  );
}

function RouteWhitSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={props => <route.component routes={route.routes} {...props} />}
    />
  );
}

export default App;
