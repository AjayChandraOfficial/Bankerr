import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MainNavigation from "./components/Layout/MainNavigation";
import { Fragment, useEffect } from "react";
import { AuthStore } from "./store/auth-context";
import { useContext } from "react";
import AccountPage from "./components/Account/AccountPage";
import { useLocation, useHistory } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import LoginBackground from "./components/backgrounds/LoginBackground";
function App() {
  const authCtx = useContext(AuthStore);
  const userId = authCtx.userId;
  const history = useHistory();
  const location = useLocation();
  console.log(location);
  useEffect(() => {
    if (location.pathname === "/login") {
      authCtx.setLoggedOut();
    }
  }, [location.pathname, authCtx]);

  return (
    <LoginBackground>
      <MainNavigation />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route path="/login" exact>
            <LoginPage />
          </Route>

          {authCtx.isLoggedIn && (
            <Route path={`/${userId}`} exact key={location.key}>
              <AccountPage />
            </Route>
          )}

          <Route path="/">
            <Redirect to="/login" />
          </Route>
        </Switch>
      </AnimatePresence>
    </LoginBackground>
  );
}

export default App;
