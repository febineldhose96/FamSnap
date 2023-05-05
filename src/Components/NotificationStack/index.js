import styles from "./styles.module.css";
import notifications from "../Assets/JSON/notifications.json";
function NotificationStack({ show = true }) {
  if (show)
    return (
      <div className={styles.main}>
        <div className={styles.main_wrapper}>
          <h3 className={styles.notific_label}>Notifications</h3>
          <ul className={styles.list}>
            {notifications.map((item, i) => {
              return (
                <li key={i} className={styles.list_item}>
                  <img
                    src={item.profileUrl}
                    className={styles.not_profileIMG}
                    alt="profile"
                  />
                  <div className={styles.list_item_innervw}>
                    {item.title}
                    <p className={styles.list_time}>1 hour ago</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  else return null;
}
export default NotificationStack;
