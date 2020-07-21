import React from "react";
import { HashRouter as Router } from "react-router-dom";
import RouterComp from "./router/routerComp";
import routes from "./router/routes";
const App = () => {
  return (
    <Router>
      <RouterComp routes={routes} />
    </Router>
  );
};

export default App;
