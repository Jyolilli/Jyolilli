import React from "react";

export type CommentsProps = {
  comments: {
    commenter: string;
    comment: {
      type: string;
      value: string;
    };
  }[];
};

function Comments(props: CommentsProps) {
  const { comments } = props;
  return (
    <>
      {comments.map(({ commenter, comment }) => (
        <p key={comment.value}>
          <h6 className="name">{commenter}: </h6>
          <span className="text">{comment.value}</span>
        </p>
      ))}
    </>
  );
}

export default Comments;
