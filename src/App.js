import React, { useState } from "react";
import "./index.css";
import NavBarComponent from "./components/commons/navBarComponent";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./commons/scrollToTop";
import RouteComponent from "./components/commons/routeComponent";
import RouteContext from "./context/routeContext";

function App() {
  const [currentPage, setCurrentPage] = useState(0);

  const onPageChange = selectedPage => {
    setCurrentPage(selectedPage);
  };
  return (
    <RouteContext.Provider
      value={{ currentPage: currentPage, onChange: onPageChange }}
    >
      <div>
        <BrowserRouter>
          <NavBarComponent currentPage={currentPage} />
          <ScrollToTop />
          <RouteComponent />
        </BrowserRouter>
      </div>
    </RouteContext.Provider>
  );
}

export default App;
