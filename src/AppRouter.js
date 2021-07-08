import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./containers/home";

function AppRouter() {
  return (
    <div className="main-section">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default AppRouter;
