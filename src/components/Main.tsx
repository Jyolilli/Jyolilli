import React from "react";
import Card from './Card';
import "../App.css";
import posts from '../data.json';

type posts = {
  postOwner: string;
  postContent: string;
  type: string;
  userAnswer: AnswerObject | undefined;
  questionNr: number;
  totalQuestions: number;


function Main() {
  return (
    <main className="main-component">
      <section>
        {posts.map((post) => (<Card {...post} />))}
         
        
      </section>
    </main>
  );
}

export default Main;
