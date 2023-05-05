import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import image1 from "../../Components/Assets/Images/family1.png";
export default function Launcher(props) {
  const state = useSelector((state) => state.HomeReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handlenav = () => {
    navigate("login");
  };
  return (
    <div className={styles.main}>
      <div className={styles.subMainwrapper}>
        <div className={styles.wrapper1}>
          <div className={styles.wrapper2}>
            <img
              src={require("../../Components/Assets/Images/launcherImg.png")}
              alt="img1"
              className={styles.img1}
            />
            <h3 className={styles.header1}>
              Everyone has treasured family photos to share.
            </h3>
            <p className={styles.text1}>
              Yet, it’s so easy for new and old family photos and stories to get
              tucked away and forgotten. Preserve them now so they can be
              enjoyed for generations to come.
            </p>
          </div>
          <img
            alt="famimg"
            src={require("../../Components/Assets/Images/family1.png")}
            className={styles.img2}
          />
        </div>
        <button className={styles.startButn} onClick={handlenav}>
          Start a free trial
        </button>

        <h2 className={styles.howitworkTxt}>Whats new on fam snap</h2>
        <div className={styles.wrapper2}>
          <img
            src={
              "https://edge.fscdn.org/assets/static/media/topic.230f98046e6280771332.png"
            }
            className={styles.img3}
          />
          <h2>Organize Your Memories</h2>
          <p className={styles.text2}>
            Organize and share your favorite new and old family photos and
            memories with Topic Tags. They’ll also help you discover interesting
            photos that others have added on topics you care about.
          </p>
          <a className={styles.learnmoretxt}>Learn more</a>
        </div>
        <div className={styles.wrapper3}>
          <img src="https://www.nni.com.sg/sites/shcommonassets/Assets/Events/NCCS/Public%20Events/psp%20event.jpg" />
          <h2>Create Your own groups and share your memories</h2>
          <p className={styles.text3}>
            Create a Group. Add members to groups and share family snap photos.
            Share these on social media or at an event like a birthday party,
            wedding, or family reunion.
          </p>
        </div>
        <div className={styles.wrapper2}>
          <img src="https://edge.fscdn.org/assets/static/media/gallery.9e7aab618de1529bcbfa.avif" />
          <h2>Enjoy your family memories in one place.</h2>
          <p className={styles.text3}>
            The Memories Gallery is where all your important family photos,
            stories, documents, and audio recordings can be securely saved and
            then shared with other family members.
          </p>
          <a className={styles.learnmoretxt}>Learn more</a>
        </div>
        <div className={styles.bottomButnWrapper}>
          <button className={styles.startButn} onClick={handlenav}>
            Start a free trial
          </button>
        </div>
      </div>
    </div>
  );
}
