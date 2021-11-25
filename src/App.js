import "./App.css";
import { Switch, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <LoginPage />
      </Route>
    </Switch>
  );
}

export default App;
