import { useEffect } from "react";
import styles from "./styles.module.css";
import { AiOutlinePlus } from "react-icons/ai";
export default function FileSection({
  groupBackgrndImgUrl = "",
  grpProfileImg = "",
}) {
  return (
    <div className={styles.main}>
      <input placeholder="Whats on your mind...?" className={styles.input} />
      <div className={styles.inner_wrapper}>
        <div className={styles.wrapper1}>
          <img
            src={require("../../../Components/Assets/Images/gallery.png")}
            alt="Search"
            className={styles.fileImg}
          />
          Gallery
        </div>
        <div className={styles.wrapper1}>
          <img
            src={require("../../../Components/Assets/Images/tagging.png")}
            alt="Search"
            className={styles.fileImg}
          />
          Tag Family
        </div>
        <div className={styles.wrapper1}>
          <img
            src={require("../../../Components/Assets/Images/location.png")}
            alt="Search"
            className={styles.fileImg}
          />
          Location
        </div>
      </div>
    </div>
  );
}
