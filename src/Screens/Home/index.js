import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MainHeader from "../../Components/MainHeader";
import { fetchAPI, apis } from "../../Network";
import list1 from "../../Components/Assets/JSON/recentActivity.json";
import { callsomeapi } from "./reducer";
import styles from "./styles.module.css";
import GridList from "./GridList";
export default function Home(props) {
  const state = useSelector((state) => state.HomeReducer);
  const randlist = list1;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fetchNew = async () => {
    const result = await fetchAPI({ url: apis.food });
    dispatch(callsomeapi(result));
  };

  return (
    <div className={styles.main}>
      <div className={styles.inputwrapper_main}>
        <div className={styles.inputwrapper}>
          <input placeholder="Search..." className={styles.input} />
          <img
            src={require("../../Components/Assets/Images/search.png")}
            alt="Search"
            className={styles.searchIcon}
          />
        </div>
        <button className={styles.create_butn}>Create Group</button>
      </div>
      <h3 className={styles.txt1}>Recent Events</h3>
      <GridList
        list={list1}
        onItemClick={() => navigate("group")}
        groupName="Adhera family"
      />
      <GridList
        list={randlist}
        onItemClick={() => alert("hi")}
        groupName="Neeraju family"
      />
      <GridList
        list={list1}
        onItemClick={() => alert("hi")}
        groupName="Pathira manal fam"
      />
    </div>
  );
}
