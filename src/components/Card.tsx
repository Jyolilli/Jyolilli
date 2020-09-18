import React, { useState } from "react";
import Comments, { CommentsProps } from "./Comments";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type CardProps = CommentsProps & {
  postOwner: string;
  postContent: {
    type: string;
    value: string;
  }[];
};
//TODO
/*
userComments - array of objects
fontawesome nested into input


*/

function Card(props: CardProps) {
  const [userComments, setUserComments] = useState("");
  const [newComment, setNewComment] = useState("");
  

  const handleCommentChange = (e: React.FormEvent<HTMLInputElement>) => {
    setNewComment(e.currentTarget.value);
    
    console.log({ newComment });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log("hi");
    e.preventDefault();
    setUserComments(newComment);

    console.log({ userComments });
  };

  //  BEM vs ITCSS

  const { postOwner, postContent, comments } = props;
  return (
    <article className="card">
      {postContent
        .filter(({ type }) => type === "image")
        .map((pic) => (
          <div>
            <img className="square-pix" src={pic.value} alt={pic.type} />
          </div>
        ))}
      <div className="square">
        <header>
          <div className="profile-pic"></div>
          <div className="emoji"></div>
          <h6 className="name">{postOwner}</h6>
        </header>
        {postContent
          .filter(({ type }) => type === "text")
          .map((txt) => (
            <div className="text">
              <p>{txt.value}</p>
            </div>
          ))}
        <footer>
          <button className="heart" type="submit" value="Post">
            <FontAwesomeIcon  icon="heart" />
            {/* <button className="like-button">Like</button>
            <button className="chat-button">Chat</button> */}
          </button>
          <div>
            <Comments comments={comments} />
            {userComments}

            <form onSubmit={handleSubmit}>
              <input className="submit-comment" value={ newComment } type="text" name="quickpost" onChange={handleCommentChange} />
              <button type="submit" value="Post">
              <FontAwesomeIcon className="arrow-right" icon="arrow-alt-circle-right" /> 
          </button>
              {/* <FontAwesomeIcon className="arrow-right" icon="arrow-alt-circle-right" /> */}
            </form>
          </div>
        </footer>
      </div>
    </article>
  );
}

export default Card;
