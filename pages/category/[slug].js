import Articles from "../../components/articles";
import { fetchAPI } from "../../lib/api";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { Heading } from "@chakra-ui/core";

const Category = ({ category, categories }) => {
  const seo = {
    metaTitle: category.name,
    metaDescription: `All ${category.name} articles`,
  };

  return (
    <Layout article_categories={categories}>
      <Seo seo={seo} />
      <Heading>{category.name}</Heading>
      <Articles articles={category.articles} />
    </Layout>
  );
};

export async function getStaticPaths() {
  const categories = await fetchAPI("/article-categories");

  return {
    paths: categories.map((category) => ({
      params: {
        slug: category.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const category = (
    await fetchAPI(`/article-categories?slug=${params.slug}`)
  )[0];
  const categories = await fetchAPI("/article-categories");

  return {
    props: { category, categories },
    revalidate: 1,
  };
}

export default Category;
