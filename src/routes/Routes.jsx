import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/home";
import TrendingPage from "../pages/trending";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/trending">
          <TrendingPage />
        </Route>
        <Route path="*">
          <h1>Not Found </h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
