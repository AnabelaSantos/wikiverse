import React from "react";
import apiURL from "../api";

export const Page = (props) => {
  async function fetchDetail() {
    try {
      const res = await fetch(apiURL + "/wiki/" + props.page.slug);
      const detailsData = await res.json();
      props.setDetail(detailsData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  return (
    <>
      <h3 onClick={fetchDetail}>{props.page.title}</h3>
      {/* {details && <Detail page={details} />} */}
      {/* <h3>{page.title}</h3> */}
    </>
  );
};
