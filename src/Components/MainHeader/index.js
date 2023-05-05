import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";
import { useSelector } from "react-redux";
export default function MainHeader({ show = true }) {
  const state = useSelector((state) => state.LauncherReducer);
  const isLoggedIn = state.isLoggedIn;
  const handleLogout = () => {
    alert("Logout succesfully");
  };
  if (show)
    return (
      <div className={styles.header_main}>
        <img
          src={require("../Assets/Images/logo.png")}
          alt="logo"
          className={styles.logo}
        />
        <ul>
          <NavLink className={styles.NavLink} to={"/"}>
            Home
          </NavLink>
          <NavLink className={styles.NavLink} to={"/"}>
            Profile
          </NavLink>
          <NavLink className={styles.NavLink} to={"/"}>
            Premium
            <img
              src={require("../Assets/Images/premium.png")}
              alt="premium"
              className={styles.premim_img}
            />
          </NavLink>
          <NavLink className={styles.NavLink} to={"/"}>
            Contact us
          </NavLink>
        </ul>
        <div className={styles.wrapper_1}>
          {isLoggedIn ? (
            <button className={styles.user_profile}>
              <img
                src={require("../Assets/Images/user.png")}
                alt="user"
                height="40px"
                width="40px"
              />
              <h3 className={styles.user_profile_txt}>Charles D </h3>
            </button>
          ) : null}
          <button className={styles.logout_btn} onClick={handleLogout}>
            {isLoggedIn ? "Log Out" : "Login"}
          </button>
        </div>
      </div>
    );
  else return null;
}
