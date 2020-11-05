import React, { useState } from "react";
import Comments, { Comment, CommentsProps } from "./Comments";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

type CardProps = {
  postOwner: string;
  id: string;
  postContent: {
    headline: string;
    mainImage: string;
    bodyText: string;
  };
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
  const [commentIcon, setCommentIcon] = useState(false);
  const [moreIcon, setMoreIcon] = useState(false);

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
    setUserComments(
      userComments.concat({
        commenter: commenter,
        comment: { type: "text", value: newComment },
      })
    );
    console.log({ userComments });
  };

  const { postOwner, postContent, id } = props;
  return (
    <article className="card">
      <div className="pix-container" key={id}>
        <Link to={`/article/${id}`}>
          <img
            className="square-pix"
            src={postContent.mainImage}
            alt="Main Image"
          />
        </Link>
      </div>

      <div className="square">
        <header>
          <div className="emoji"></div>
          <h6 className="post-owner-name">{postOwner}</h6>
        </header>

        <div key={id} className="post-bg">
          <div className="post-text">
            <span>{postContent.headline}</span>
          </div>
        </div>

        <footer>
          <button
            className={heartIconFilled ? "heart" : "icon-gray"}
            onClick={() => setHeartIconFilled(!heartIconFilled)}
          >
            <FontAwesomeIcon icon="heart" />
          </button>
          <button
            className={commentIcon ? "comment" : "icon-gray"}
            onClick={() => setCommentIcon(!commentIcon)}
          >
            <FontAwesomeIcon icon="comment" />
          </button>
          <button
            className={moreIcon ? "comment" : "icon-gray"}
            onClick={() => setMoreIcon(!moreIcon)}
          >
            <FontAwesomeIcon icon="angle-double-right" />
          </button>
        </footer>
      </div>
    </article>
  );
}

export default Card;
