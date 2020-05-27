import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../home/home";
import About from "../about/about";
import Resume from "../resume/resume";
import Portfolios from "../portfolio/portfolios";
import Contact from "../contact/contact";

export default function RouteComponent() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/resume" component={Resume} />
        <Route path="/portfolios" component={Portfolios} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </React.Fragment>
  );
}
