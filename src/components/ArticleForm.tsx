import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Setter {
  (value: string): void;
}

const ArticleForm = () => {
  const [headline, setHeadline] = useState('');
  const [articleBody, setArticleBody] = useState('');

  const handleChange = (
    event:
      | React.FormEvent<HTMLInputElement>
      | React.FormEvent<HTMLTextAreaElement>,
    setter: Setter
  ) => {
    setter(event.currentTarget.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    alert(`Headline: ${headline}, body: ${articleBody}`);
    event.preventDefault();
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
