import React from 'react';
import Comments, { CommentsProps } from './Comments';

type CardProps = CommentsProps & {
  postOwner: string;
  postContent: {
    type: string;
    text: string;
  };
};

function Card(props: CardProps) {
const handlePost = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    console.log(newValue)
}

  const { postOwner, postContent, comments } = props;
  return (
    <article className="card">
      <header>
        <div className="profile-pic"></div>
        <div className="emoji"></div>
        <h2>{postOwner}</h2>
      </header>
      <div>
        <p>{postContent.text}</p>
      </div>
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
    </article>
  );
}

export default Card;
