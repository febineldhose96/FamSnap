import GroupStack from "../GroupStack";
import NotificationStack from "../NotificationStack";
import MainHeader from "../MainHeader";
import styles from "./styles.module.css";
import { useSelector } from "react-redux";
function MainWrapper({ children }) {
  const state = useSelector((state) => state.LauncherReducer);
  const isLoggedIn = state.isLoggedIn;
  return (
    <div className={styles.main}>
      <MainHeader />
      <div className={styles.main_wrapper1}>
        <GroupStack />
        <div className={styles.middleWrapper}>{children}</div>
        <NotificationStack />
      </div>
    </div>
  );
}
export default MainWrapper;
