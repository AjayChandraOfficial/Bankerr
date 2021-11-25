import { useContext } from "react";
import { AuthStore } from "../../store/auth-context";
const AccountPage = () => {
  const authCtx = useContext(AuthStore);
  return <h2>{`Welcome, ${authCtx.userId} 👋`}</h2>;
};
export default AccountPage;
