import React from "react";
import { useGlobalContext } from "./Context";

const Stories = () => {
  const { hits, isLoading, removePost } = useGlobalContext();
  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <div className="stories-div">
        {hits.map((curPost) => {
          const { title, author, objectID, url, num_comments } = curPost;
          return (
            <>
              <div className="card" key={objectID}>
                <h2>{title}</h2>
                <p>
                  By {author} | <span>{num_comments} comments</span>
                </p>
                <div className="card-button">
                  <a href={url} target="_blank">
                    Read More
                  </a>
                  <a href="#" onClick={() => removePost(objectID)}>
                    {" "}
                    Remove
                  </a>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Stories;
