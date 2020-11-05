import React from "react";
import Card from "./Card";
import posts from "../data.json";

const Layout = () => {
  return (
    <article className="layout">
      <header className="square-pic-large"></header>
      <main className="pic-small-container">
        {posts.map((post) => (
          <Card key={post.id} {...post} />
        ))}
      </main>
      <footer></footer>
    </article>
  );
};

export default Layout;
