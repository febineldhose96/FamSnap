import { useEffect } from "react";
import styles from "./styles.module.css";
import { AiOutlinePlus } from "react-icons/ai";
export default function GroupInfo({
  groupBackgrndImgUrl = "",
  grpProfileImg = "",
  onSearch = () => {},
}) {
  return (
    <div className={styles.main}>
      <div className={styles.headwrapper}>
        <div className={styles.inputwrapper_main}>
          <div className={styles.inputwrapper}>
            <input
              placeholder="Search..."
              className={styles.input}
              onChange={onSearch}
            />
            <img
              src={require("../../../Components/Assets/Images/search.png")}
              alt="Search"
              className={styles.searchIcon}
            />
          </div>
          <button className={styles.create_butn}>Create Group</button>
        </div>
        <div className={styles.grpNameCard}>
          <div className={styles.grpNameCardinner}>
            <img src={grpProfileImg} alt="grpimg" className={styles.grpimg} />
            <div className={styles.grpNameInnerView}>
              <h3 className={styles.grpNametxt}>Group Name</h3>
              <p className={styles.grpDecrptntxt}>We need more time to chill</p>
            </div>
          </div>
          <button className={styles.add_member}>
            <AiOutlinePlus className={styles.plusIcon} />
            Add member
          </button>
        </div>
      </div>
    </div>
  );
}
