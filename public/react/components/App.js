import React, { useState, useEffect } from "react";
import { PagesList } from "./PagesList";
import { Detail } from "./Details";
import { slug } from "./Page";

// import and prepend the api url to any fetch calls
import apiURL from "../api";

export const App = () => {
  const [pages, setPages] = useState([]);
  const [details, setDetails] = useState([]);
  const [slug, setSlug] = useState("");

  async function fetchPages() {
    try {
      const response = await fetch(`${apiURL}/wiki`);
      const pagesData = await response.json();
      setPages(pagesData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  async function fetchDetails(slug) {
    try {
      const response = await fetch(`${apiURL}/wiki/${slug}`);
      const detailsData = await response.json();
      setDetails(detailsData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  useEffect(() => {
    fetchPages();
    fetchDetails(slug);
  }, []);

  return (
    <main>
      <h1>WikiVerse</h1>
      <h2>An interesting 📚</h2>
      <PagesList pages={pages} />
      <Detail details={details} />
    </main>
  );
};
