import { Box, Heading, Text } from "@chakra-ui/core";

import Head from "next/head";
import Image from "../../components/image";
import Layout from "../../components/layout";
import ReactMarkdown from "react-markdown";
import Seo from "../../components/seo";
import { fetchAPI } from "../../lib/api";
import { getMediaUrl } from "../../lib/media";
import gfm from "remark-gfm";

const headingFontsizes = {
  h1: ["2xl", "3xl", "4xl", "5xl"],
  h2: ["xl", "2xl", "2xl", "2xl"],
  h3: ["md", "lg", "xl", "xl"],
};

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
          <ReactMarkdown
            source={block.content}
            key={block.id}
            renderers={markdownRenderers}
          />
        </Box>
      );
  }
};

const markdownRenderers = {
  code: ({ language, value }) => (
    <Box bg="green.100" marginY="5" paddingX="2" paddingY="2">
      {value}
    </Box>
  ),
  heading: ({ level, children }) => {
    const headingLevel = `h${level}`;
    return (
      <Heading
        paddingTop="2rem"
        as={headingLevel}
        fontSize={headingFontsizes[headingLevel]}
      >
        {children}
      </Heading>
    );
  },
  paragraph: ({ children }) => <Text paddingY="3">{children}</Text>,
};

const Article = ({ article, article_categories }) => {
  const featuredImage = article.featured_image?.media;

  const seo = {
    title: article.title,
    description: article.summary,
    featuredImage: article.featured_image?.media,
    article: true,
  };

  return (
    <Layout article_categories={article_categories}>
      <Seo seo={seo} />

      <Box p={["5", "16", "24", "48"]}>
        <Heading
          as="h1"
          paddingTop="8"
          pb="3"
          fontSize={headingFontsizes["h1"]}
        >
          {article.title}
        </Heading>
        <Text paddingBottom="12" fontSize={headingFontsizes["h3"]}>
          <ReactMarkdown source={article.ingress} />
        </Text>

        {article.featured_image && (
          <Box as="figure" paddingY="12">
            <Image image={article.featured_image.media}></Image>
            <Text as="figcaption">{article.featured_image.caption}</Text>
          </Box>
        )}

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
