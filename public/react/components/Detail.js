import React from "react";

export const Detail = (props) => {
  return (
    <>
      <h3>{props.page.title}</h3>
      <h4>Author:{props.page.author.name}</h4>
      <h4>Content: {props.page.content}</h4>
      <h4>
        Tags:{" "}
        {props.page.tags.map((tag, idx) => (
          <p key={idx}>{tag.name}</p>
        ))}
      </h4>
      ;<h4>Published: {props.page.createdAt.slice(0, 10)}</h4>
      <button onClick={() => props.setDetail()}>Back to Wiki List</button>
    </>
  );
};
