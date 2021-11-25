import "./App.css";
import { Switch, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MainNavigation from "./components/Layout/MainNavigation";
import { Fragment } from "react";
function App() {
  return (
    <Fragment>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <LoginPage />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
