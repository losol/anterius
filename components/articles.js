import React from "react";
import Card from "./card";

const Articles = ({ articles }) => {
  const leftArticlesCount = Math.ceil(articles.length / 5);
  const leftArticles = articles.slice(0, leftArticlesCount);
  const rightArticles = articles.slice(leftArticlesCount, articles.length);

  return (
    <>
      <div id="left">
        {leftArticles.map((article, i) => {
          return (
            <Card article={article} key={`article__left__${article.slug}`} />
          );
        })}
      </div>
      <div id="right">
        {rightArticles.map((article, i) => {
          return (
            <Card article={article} key={`article__left__${article.slug}`} />
          );
        })}
      </div>
    </>
  );
};

export default Articles;
