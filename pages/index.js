import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Articles from "../components/articles";
import { fetchAPI } from "../lib/api";

const Home = ({ articles, article_categories, siteSettings }) => {
  return (
    <Layout
      article_categories={article_categories}
      site_settings={siteSettings}
    >
      <Seo seo={siteSettings} />
      <Articles articles={articles} />
    </Layout>
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
