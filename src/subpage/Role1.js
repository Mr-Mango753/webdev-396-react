import React from 'react';

const Article = ({ title, summary }) => {
  return (
    <li>
      <h3>{title}</h3>
      <p>{summary}</p>
    </li>
  );
};

const ArticlesList = () => {
  const articles = [
    { title: 'Title 1', summary: 'Summary of the first article...' },
    { title: 'Title 2', summary: 'Summary of the second article...' },
    { title: 'Title 3', summary: 'Summary of the third article...' },
  ];

  return (
    <ul className="articles-list">
      {articles.map((article, index) => (
        <Article key={index} title={article.title} summary={article.summary} />
      ))}
    </ul>
  );
};

const GodOfWar = () => {
  return (
    <div className="container">
      <h1>God of War</h1>
      <a href="https://www.counter-strike.net/">God of War</a>
      <h1>Latest News</h1>
      <ArticlesList />
    </div>
  );
};

const Role1 = () => {
  return (
    <div>
      <GodOfWar />
    </div>
  );
};

export default Role1;
