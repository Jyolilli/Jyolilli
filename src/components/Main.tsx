import React from 'react';
import Card from './Card';
import '../App.css';
import posts from '../data.json';

function Main() {
  return (
    <main className="main-component">
      <section>
        {posts.map((post) => (
          <Card {...post} />
        ))}
      </section>
    </main>
  );
}

export default Main;
