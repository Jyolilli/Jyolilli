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

function Card(props: CardProps) {
  const [userComments, setUserComments] = useState("");

  const handlePost = (e: React.FormEvent<HTMLInputElement>) => {
   console.log(e.currentTarget.value);
    setUserComments(e.currentTarget.value);
    console.log(userComments);
  };

  //  BEM vs ITCSS

  const { postOwner, postContent, comments } = props;
  return (
    <article className="card">
      {postContent
        .filter(({ type }) => type === "image")
        .map((pic) => (
          <div className="brick">
            <img className="square-pix" src={pic.value} alt={pic.type} />
          </div>
        ))}
      <div className="brick">
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
          <header>
            <FontAwesomeIcon icon="heart" />
            <button className="like-button">Like</button>
            <button className="chat-button">Chat</button>
          </header>
          <div>
            <Comments comments={comments} />
            {userComments}

            <form action="">
              <input type="text" name="quickpost" onChange={handlePost} />
              <input type="submit" value="Post" />
            </form>
          </div>
        </footer>
      </div>
    </article>
  );
}

export default Card;
