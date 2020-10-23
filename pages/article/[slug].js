import ReactMarkdown from "react-markdown";
import { fetchAPI } from "../../lib/api";
import Layout from "../../components/layout";
import Image from "../../components/image";
import Seo from "../../components/seo";
import { getMediaUrl } from "../../lib/media";
import { Heading } from "@chakra-ui/core";

const RenderBlock = (block) => {
  switch (block.__component) {
    case "storyblocks.image":
      return <Image image={block.media} />;
    case "storyblocks.richtext":
      return <ReactMarkdown source={block.content} />;
  }
};

const Article = ({ article, article_categories }) => {
  const featuredImage = article.featured_image?.media;

  const seo = {
    metaTitle: article.title,
    metaDescription: article.summary,
    featuredImage: article.featured_image?.media,
    article: true,
  };

  return (
    <Layout article_categories={article_categories}>
      <Seo seo={seo} />
      <Heading>{article.title}</Heading>
      <ReactMarkdown source={article.ingress} escapeHtml={false} />
      {article.story.map((block) => RenderBlock(block))}

      <p>Publisert: {article.published_at}</p>
    </Layout>
  );
};

export async function getStaticPaths() {
  const articles = await fetchAPI("/articles");

  return {
    paths: articles.map((article) => ({
      params: {
        slug: article.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const articles = await fetchAPI(`/articles?slug=${params.slug}`);
  const article_categories = await fetchAPI("/article-categories");

  return {
    props: { article: articles[0], article_categories },
    revalidate: 1,
  };
}

export default Article;
