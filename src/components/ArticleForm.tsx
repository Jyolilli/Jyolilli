import React, { useState } from "react";
import { CommentsProps } from "./Comments";
import { Link } from "react-router-dom";

interface Setter {
  (value: string): void;
}

type CardProps = CommentsProps & {
  postOwner: string;
  id: string;
  postContent: {
    type: string;
    value: string;
  }[];
};

const ArticleForm = () => {
  const [headline, setHeadline] = useState("");
  const [articleBody, setArticleBody] = useState("");

  const handleChange = (
    event:
      | React.FormEvent<HTMLInputElement>
      | React.FormEvent<HTMLTextAreaElement>,
    setter: Setter
  ) => {
    setter(event.currentTarget.value);
  };

  // create a function to get the articles from local storage, add new article to the array and resave to local storage
  const saveArticle = (item: CardProps) => {
    // const userJson = localStorage.getItem("currentUser");
    // this.currentUser = userJson !== null ? JSON.parse(userJson) : new User();
    const isLocal = localStorage.getItem("articles");
    const local = isLocal ? JSON.parse(isLocal) : [];
    // push new article to the 'local' array here:
    local.push(item);
    // set local storage with updated array
    localStorage.setItem("articles", JSON.stringify(local));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // alert(`Headline: ${headline}, body: ${articleBody}`);
    const newArticle = {
      postOwner: headline,
      id: String(Math.floor(1000 + Math.random() * 9000)),
      postContent: [
        {
          type: "image",
          value:
            "https://www.creasedcards.com/img/product/traflagar-square-art-based-london-landmark-card-3010907-600.jpg",
        },
        {
          type: "text",
          value: articleBody,
        },
      ],
      comments: [
        {
          commenter: "Luke",
          comment: {
            type: "text",
            value: "Great post!",
          },
        },
      ],
    };
    saveArticle(newArticle);

    // localStorage.setItem("article", JSON.stringify(newArticle));
    // localStorage.setItem("headline", headline);
    // localStorage.setItem("articleBody", articleBody);
    alert("Your article is saved!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Headline
        <input
          type="text"
          value={headline}
          onChange={(e) => handleChange(e, setHeadline)}
        />
      </label>

      <label>
        Article Body
        <textarea
          value={articleBody}
          onChange={(e) => handleChange(e, setArticleBody)}
        />
      </label>

      <input type="submit" value="Submit" />
    </form>
  );
};

export default ArticleForm;
