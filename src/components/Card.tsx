import React from "react";
import Comments, { CommentsProps } from "./Comments";

type CardProps = CommentsProps & {
  postOwner: string;
  postContent: {
    type: string;
    value: string;
  }[];
};

function Card(props: CardProps) {
  const handlePost = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    console.log(newValue);
  };

  //  BEM vs ITCSS

  const { postOwner, postContent, comments } = props;
  return (
    <article className="card">
      {postContent
        .filter(({ type }) => type === "image")
        .map((pic) => (
          <div className="square-pic">
            <img src={pic.value} alt={pic.type} />
          </div>
        ))}
      {/* {postContent.type === "image" ? (
        <div className="square-pic">
          <img src={postContent.value} alt={postContent.type} />
        </div>
      ) : null} */}
      <div className="square-pic">
        <header>
          <div className="profile-pic"></div>
          <div className="emoji"></div>
          <h2>{postOwner}</h2>
        </header>
        {postContent
          .filter(({ type }) => type === "text")
          .map((txt) => (
            <div>
              <p>{txt.value}</p>
            </div>
          ))}
        {/* {postContent.type === "text" ? (
          <div>
            <p>{postContent.value}</p>
          </div>
        ) : null} */}
        <footer>
          <header>
            <button>LikeBtn</button>
            <button>ChatBtn</button>
          </header>
          <div>
            <Comments comments={comments} />

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
