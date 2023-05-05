import styles from "./styles.module.css";
import familyGroups from "../Assets/JSON/familyGroups.json";
function GroupStack({ show = true }) {
  if (show)
    return (
      <div className={styles.group_main}>
        <div
          className={styles.profile_img_wrapper}
          style={{
            backgroundImage:
              "url(https://st.depositphotos.com/1013513/2690/i/600/depositphotos_26904027-stock-photo-happy-family-making-home-sign.jpg)",
          }}
        >
          <div className={styles.profile_img_wrapper1}>
            <img
              className={styles.profile_image}
              alt="profile_img"
              src="https://media.istockphoto.com/id/934017888/vector/family-in-jumping-at-sunset-silhouette-vector.jpg?s=612x612&w=0&k=20&c=SAqBpSDJbR0xPpiZHf7q1kw2R40xowzat4oZwj1lSr8="
            />
            <p className={styles.user_name_text}>Charles D</p>
          </div>
        </div>
        <h3 className={styles.family_grp_txt}>Family Groups</h3>
        <ul className={styles.group_list}>
          {familyGroups.map((item, i) => {
            return (
              <li key={i} className={styles.list_item}>
                <img
                  src={item.imgUrl}
                  alt="group_img"
                  className={styles.group_img}
                />
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  else return null;
}
export default GroupStack;
