import React, { useState, useEffect } from "react";
import { PagesList } from "./PagesList";
import { Detail } from "./Detail";

// import and prepend the api url to any fetch calls
import apiURL from "../api";

export const App = () => {
  const [pages, setPages] = useState([]);
  const [detail, setDetail] = useState();

  async function fetchPages() {
    try {
      const response = await fetch(`${apiURL}/wiki`);
      const pagesData = await response.json();
      setPages(pagesData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  useEffect(() => {
    fetchPages();
  }, []);

  return (
    <main>
      <h1>WikiVerse</h1>
      <h2>An interesting 📚</h2>
      {!detail ? (
        <PagesList pages={pages} setDetail={setDetail} />
      ) : (
        <Detail page={detail} setDetail={setDetail} />
      )}
    </main>
  );
};
