import React from "react";

export const Detail = (page) => {
  try {
    const tags = page.details.tags;
    return (
      <>
        {<h3>{page.details.title}</h3>}
        {<h3>{page.details.author.name}</h3>}
        {<h3>{page.details.content}</h3>}
        {tags.map((tag, idx) => {
          {
            return <h3>{tag.name}</h3>;
          }
        })}
        {<h3>{page.details.createdAt}</h3>}
      </>
    );
  } catch (err) {
    console.log("Oh no an error! ", err);
  }
};
