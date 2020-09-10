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
          <span>{commenter}: </span>
          {comment.value}
        </p>
      ))}
    </>
  );
}

export default Comments;
