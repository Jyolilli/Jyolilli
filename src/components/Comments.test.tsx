import React from "react";
import { render } from "@testing-library/react";
import Comments from "./Comments";

test("comment should be rendered", () => {
  const comments = [
    {
      commenter: "Claas",
      comment: {
        type: "text",
        value: "codebar magic",
      },
    },
  ];
  const { getByText } = render(<Comments comments={comments} />);
  const commentElement = getByText(comments[0].comment.value);

  expect(commentElement).toBeInTheDocument();
});
