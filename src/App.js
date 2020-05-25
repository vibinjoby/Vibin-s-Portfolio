import React from "react";
import "./index.css";
import NavBarComponent from "./components/navBarComponent";
import Home from "./components/home";
import About from "./components/about";
import Resume from "./components/resume";
import Portfolios from "./components/portfolios";
import Contact from "./components/contact";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  document.title = "👨‍💻Vibin's Portfolio";
  return (
    <div>
      <BrowserRouter>
        <NavBarComponent />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/resume" component={Resume} />
          <Route path="/portfolios" component={Portfolios} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
