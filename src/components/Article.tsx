import React from "react";
import { useParams } from "react-router-dom";
import posts from "../data.json";

interface ParamTypes {
  id: string;
}

const Article = () => {
    const { id } = useParams<ParamTypes>();
    const post = posts.find(item => item.id === id)
    return <div>{post.postOwner}</div>;
};

export default Article;
// http://localhost:3000/article/0003