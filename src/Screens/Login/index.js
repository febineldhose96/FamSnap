import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { onlogin } from "../Launcher/reducer";
export default function Login(props) {
  const [username, setUsername] = useState(null);
  const [password, setpassword] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const validateuser = () => {
    if (username && password) {
      dispatch(onlogin(true));
      navigate("/", { replace: true });
      window.history.replaceState(null, "login");
    }
  };
  return (
    <div className={styles.main}>
      <img
        src={
          "https://www.daysoftheyear.com/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=cover%2Cheight=650%2Cq=70%2Csharpen=1%2Cwidth=956/wp-content/uploads/family-day1.jpg"
        }
      />
      <div className={styles.innerMain}>
        <img
          src={require("../../Components/Assets/Images/launcherImg.png")}
          className={styles.logo_img}
        />
        <form action="">
          <div className={styles.inputwrapper}>
            <input
              className={styles.input}
              placeholder="User name"
              required={true}
              onChange={(e) => setUsername(e)}
            />
            <input
              className={styles.input}
              placeholder="password"
              required={true}
              onChange={(e) => setpassword(e)}
            />
            <p className={styles.forgotpswr}>Forgott password?</p>
            <button className={styles.login} onClick={validateuser}>
              Login
            </button>
            <button className={styles.signup}>Create a free account</button>
            <p className={styles.privacyPolcy}>
              By clicking the Sign in button, I agree to the Terms of Use and
              have read the Privacy Notice.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
