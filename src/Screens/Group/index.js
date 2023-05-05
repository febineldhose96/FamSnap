import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { AiOutlinePlus } from "react-icons/ai";
import GroupInfo from "./GroupInfo";
import FileSection from "./FileSection";
import GroupList from "./GroupList";
import { apis, fetchAPI } from "../../Network";
import newData from "../../Components/Assets/JSON/familyGroups.json";

export default function Group(props) {
  const [data, setdata] = useState(newData);
  const [userlist, setUserlist] = useState([]);
  const handleCall = async () => {
    const result = await fetchAPI({ url: apis.userlist });
    setUserlist(result.users);
  };
  const onhandleChange = ({ currentTarget }) => {
    const newDta = [...newData];
    if (currentTarget.value) {
      const newList = newDta.filter((e) =>
        e.name.toLowerCase().includes(currentTarget.value.toLowerCase())
      );
      setdata(newList);
    } else {
      setdata(newData);
    }
  };
  useEffect(() => {
    handleCall();
  }, []);
  return (
    <div className={styles.main}>
      <GroupInfo
        groupBackgrndImgUrl="https://hips.hearstapps.com/hmg-prod/images/portrait-of-family-in-front-of-residential-home-royalty-free-image-1666990628.jpg?crop=1.00xw:0.752xh;0,0.236xh&resize=1200:*"
        grpProfileImg="https://www.careforthefamily.org.uk/wp-content/uploads/2022/01/family-reading-1.jpg"
        onSearch={onhandleChange}
      />
      <FileSection />
      <GroupList list={data} extralist={userlist} />
    </div>
  );
}
