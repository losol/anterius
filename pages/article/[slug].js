import ReactMarkdown from "react-markdown";
import { fetchAPI } from "../../lib/api";
import Layout from "../../components/layout";
import Image from "../../components/image";
import Seo from "../../components/seo";
import { getMediaUrl } from "../../lib/media";
import { Box, Heading, Text } from "@chakra-ui/core";

const RenderBlock = (block) => {
  switch (block.__component) {
    case "storyblocks.image":
      if (block.media) {
        return <Image image={block.media} key={block.id} />;
      }
      break;
    case "storyblocks.richtext":
      return (
        <Box py="5" className="richtext">
          <ReactMarkdown source={block.content} key={block.id} />
        </Box>
      );
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

      <Box p={["5", "16", "24", "48"]}>
        <Heading
          as="h1"
          paddingTop="20"
          pb="5"
          fontSize={["2xl", "3xl", "4xl", "5xl"]}
        >
          {article.title}
        </Heading>
        <Text paddingY="5">
          <ReactMarkdown source={article.ingress} />
        </Text>

        {article.story.map((block) => RenderBlock(block))}
        <Text paddingTop="16">Publisert: {article.published_at}</Text>
      </Box>
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
