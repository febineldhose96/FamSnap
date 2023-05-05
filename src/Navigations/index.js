import { useSelector } from "react-redux";
import MainNav from "./mainNav";
import RootApp from "./rootNav";
function MainApp(params) {
  const state = useSelector((state) => state.LauncherReducer);
  const isLoggedIn = state.isLoggedIn;
  return <MainNav />;
}
export default MainApp;
