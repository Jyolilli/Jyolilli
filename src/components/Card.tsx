import React, { useState } from "react";
import Comments, { Comment, CommentsProps } from "./Comments";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

type CardProps = CommentsProps & {
  postOwner: string;
  id: string;
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
  const [userComments, setUserComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [commenter, setCommenter] = useState("");
  const [heartIconFilled, setHeartIconFilled] = useState(false);

  const handleCommentChange = (e: React.FormEvent<HTMLInputElement>) => {
    setNewComment(e.currentTarget.value);

    console.log({ newComment });
  };

  const handleCommenterChange = (e: React.FormEvent<HTMLInputElement>) => {
    setCommenter(e.currentTarget.value);

    console.log({ commenter });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUserComments(userComments.concat({ commenter: commenter, comment: { type: "text", value: newComment } }));
    console.log({ userComments });
  };

  const { postOwner, postContent, comments, id } = props;
  return (
    <article className="card">
      {postContent
        .filter(({ type }) => type === "image")
        .map((pic) => (
          <div className="pix-container" key={pic.value}>
            <Link to={`/article/${id}`}><img className="square-pix" src={pic.value} alt={pic.type} /></Link>
          </div>
        ))}
      <div className="square">
        <header>
          <div className="emoji"></div>
          <h6 className="post-owner-name">{postOwner}</h6>
        </header>
        {postContent
          .filter(({ type }) => type === "text")
          .map((txt) => (
            <div key={txt.value} className="post-bg">
              <div className="post-text">
                <span>{txt.value}</span>
              </div>
            </div>
          ))}
        <footer>
          <button
            className={heartIconFilled ? "heart" : "heart-gray"}
            onClick={() => setHeartIconFilled(!heartIconFilled)}
          >
            <FontAwesomeIcon icon="heart" />
          </button>

          {/* // with interpolation still readable?
          <button className={`heart${ heartIconFilled ? "" : "-gray"}`} onClick={() => setHeartIconFilled(!heartIconFilled)}>
              <FontAwesomeIcon icon="heart" />
            </button> */}

          <div>
            <Comments comments={comments} />
            <Comments comments={userComments} />

            <form onSubmit={handleSubmit}>
              <div>
                <input
                  className="submit-comment"
                  value={commenter}
                  type="text"
                  name="quickpost"
                  onChange={handleCommenterChange}
                />
                <input
                  className="submit-commenter"
                  value={newComment}
                  type="text"
                  name="quickpost"
                  onChange={handleCommentChange}
                />
              </div>
              <button type="submit" value="Post">
                <FontAwesomeIcon className="arrow-right" icon="angle-double-right" />
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
