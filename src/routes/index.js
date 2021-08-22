import { Switch, Route } from "react-router-dom";
import Home from "../pages/home";
import Movie from "../pages/movie";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/movie/:id" component={Movie} />
  </Switch>
);

export default Routes;
