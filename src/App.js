import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MainNavigation from "./components/Layout/MainNavigation";
import { Fragment, useEffect } from "react";
import { AuthStore } from "./store/auth-context";
import { useContext } from "react";
import AccountPage from "./components/Account/AccountPage";
import { useLocation } from "react-router-dom";

function App() {
  const authCtx = useContext(AuthStore);
  const userId = authCtx.userId;
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/login") {
      authCtx.setLoggedOut();
    }
  }, [location.pathname, authCtx]);

  return (
    <Fragment>
      <MainNavigation />

      <Switch>
        <Route path="/login" exact>
          <LoginPage />
        </Route>
        {authCtx.isLoggedIn && (
          <Route path={`/${userId}`} exact>
            <AccountPage />
          </Route>
        )}
        <Route path="/">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
