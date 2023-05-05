import { useEffect } from "react";
import styles from "./styles.module.css";
import { AiOutlinePlus } from "react-icons/ai";
export default function GroupList({ list = [], extralist = [] }) {
  return (
    <div className={styles.main}>
      <ul className={styles.listmain}>
        {list.map((item, i) => {
          return (
            <li key={i} className={styles.list_item}>
              <div className={styles.profile_img_wrapper}>
                <img
                  src={extralist[i] && extralist[i].image}
                  className={styles.profile_img}
                />
                <p className={styles.profile_name}>{item.name}</p>
              </div>
              <img src={item.imgUrl} className={styles.image_} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
