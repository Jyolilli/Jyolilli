import React from "react";
import Card from "./Card";
import postData from "../data.json";

const Posts = () => (
  <>
    {postData.map((post) => (
      <Card key={post.postOwner} {...post} />
    ))}
  </>
);
export default Posts;
