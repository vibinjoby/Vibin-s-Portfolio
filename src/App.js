import React from "react";
import "./index.css";
import NavBarComponent from "./commons/navBarComponent";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./commons/scrollToTop";
import RouteComponent from "./commons/routeComponent";

function App() {
  document.title = "👨‍💻Vibin's Portfolio";
  return (
    <div>
      <BrowserRouter>
        <NavBarComponent />
        <ScrollToTop />
        <RouteComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
