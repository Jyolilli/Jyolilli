import React from "react";
import { useParams } from "react-router-dom";
import posts from "../data.json";

interface ParamTypes {
  id: string;
}

const Article = () => {
  const { id } = useParams<ParamTypes>();
  const post = posts.find((item) => item.id === id);
  console.log("post", post);
  return (
    <div>
      <div>{post!.postOwner}</div>
      <div>
      {post!.postContent
          .filter(({ type }) => type === "text")
          .map((txt) => (
            <div key={txt.value} className="post-bg">
              <div className="post-text">
                <span>{txt.value}</span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Article;
// http://localhost:3000/article/0003
