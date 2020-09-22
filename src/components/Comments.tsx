import React from "react";

export type CommentsProps = {
  comments: Comment[];
};

export interface Comment {
  commenter: string;
  comment: {
    type: string;
    value: string;
  };
}

function Comments(props: CommentsProps) {
  const { comments } = props;
  return (
    <>
      {comments.map(({ commenter, comment }) => (
        <div className="comment-bg" key={comment.value}>
          <h6 className="commenter-name">{commenter}: </h6>
          <span className="comment-text">{comment.value}</span>
        </div>
      ))}
    </>
  );
}

export default Comments;
