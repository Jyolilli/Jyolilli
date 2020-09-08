import React from 'react';
import Card from './Card';
import '../App.css';
import posts from '../data.json';
import Layout from './Layout'

function App() {
  return (
    <main className="main-component">
      <section>
        {/* {posts.map((post) => (
          <Card key={post.postOwner} {...post} />
        ))} */}
        <Layout/>
      </section>
    </main>
  );
}

export default App;
