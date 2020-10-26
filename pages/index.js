import ArticleList from "../components/articleList";
import Articles from "../components/articles";
import Layout from "../components/layout";
import React from "react";
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";

const Home = ({ articles, article_categories, siteSettings }) => {
  return (
    <>
      <Layout
        article_categories={article_categories}
        site_settings={siteSettings}
      >
        <Seo seo={siteSettings} />
        <Articles articles={articles} />
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [articles, article_categories] = await Promise.all([
    fetchAPI("/articles"),
    fetchAPI("/article-categories"),
  ]);

  return {
    props: { articles, article_categories },
    revalidate: 1,
  };
}

export default Home;
