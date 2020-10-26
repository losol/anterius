import Link from "next/link";
import React from "react";

const ArticleList = ({ articles }) => {
  return (
    <>
      <ul id="articlelist">
        {articles.map((article) => {
          return (
            <li key="{article.id}">
              <Link as={`/article/${article.slug}`} href="/article/[id]">
                {article.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ArticleList;
