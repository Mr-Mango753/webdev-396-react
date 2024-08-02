import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <a href="index.html">News</a>
      <a href="topics.html">Topics</a>
      <a href="profile.html">Profile</a>
    </nav>
  );
};

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

const Asphalt9 = () => {
  return (
    <div className="container">
      <h1>Asphalt 9</h1>
      <a href="https://asphaltlegends.com/">Asphalt 9</a>
      <h1>Latest News</h1>
      <ArticlesList />
    </div>
  );
};

const Racing2 = () => {
  return (
    <div>
      <Navbar />
      <Asphalt9 />
    </div>
  );
};

export default Racing2;
