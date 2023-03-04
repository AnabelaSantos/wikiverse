import React from "react";
import { setSlug } from "./App";

export const Page = (props) => {
  page = props.page;
  return (
    <>
      <h3 onClick={() => setSlug(page.slug)}>{page.title}</h3>
      {/* <h3>{page.title}</h3> */}
    </>
  );
};
