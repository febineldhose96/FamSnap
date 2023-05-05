import styles from "./styles.module.css";
function GridList({ list = [], onItemClick = () => {}, groupName = "" }) {
  return (
    <div className={styles.main}>
      <div className={styles.nameWrapper}>
        <img
          src={require("../../../Components/Assets/Images/user.png")}
          className={styles.groupImg}
        />
        <h3 className={styles.nameTxt}>{groupName}</h3>
      </div>
      <ul className={styles.list}>
        {list.map((item, i) => {
          return (
            <li key={i} className={styles.list_item} onClick={onItemClick}>
              <img
                src={item.imgUrl}
                className={styles.list_img}
                alt="groupimg"
              />
            </li>
          );
        })}
      </ul>
      <button className={styles.more_butn}>
        <img
          alt="moreImg"
          src={require("../../../Components/Assets/Images/load_more.png")}
          className={styles.moreImg}
        />
      </button>
    </div>
  );
}
export default GridList;
