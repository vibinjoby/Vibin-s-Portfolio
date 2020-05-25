import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export default function RouteComponent() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/resume" component={Resume} />
          <Route path="/portfolios" component={Portfolios} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}
