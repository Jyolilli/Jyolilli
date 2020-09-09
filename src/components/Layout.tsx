import React from "react";
import Card from './Card'
import posts from "../data.json";



const Layout = () => {
  return (
    <article className="layout">
      <header className="square-pic-large"></header>
      <main className="pic-small-container">{posts.map((post) => (
            <Card key={post.postOwner} {...post} />
          ))}
        <div className="square-pic-small-one">
          
        </div>
        <div className="square-pic-small-two">two</div>
        <div className="square-pic-small-three">three</div>
        <div className="square-pic-small-four">four</div>
        <div className="square-pic-small-five">five</div>
        <div className="square-pic-small-six">six</div>
      </main>
      <footer></footer>
    </article>
  );
};

export default Layout;