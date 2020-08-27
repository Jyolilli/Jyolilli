import React from 'react';

export type CommentsProps = {
  comments: {
    commenter: string;
    comment: {
      type: string;
      text: string;
    };
  }[];
};

function Comments(props: CommentsProps) {
  const { comments } = props;
  return (
    <>
      {comments.map(({ commenter, comment }) => (
        <p>
          <span>{commenter}: </span>
          {comment.text}
        </p>
      ))}
    </>
  );
}

export default Comments;
