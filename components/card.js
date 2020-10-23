import React from "react";
import Link from "next/link";
import Image from "./image";
import { Box, Heading, Image as ChakraImage } from "@chakra-ui/core";

const Card = ({ article }) => {
  return (
    <>
      <Link as={`/article/${article.slug}`} href="/article/[id]">
        <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden">
          <Box p="6">
            <Box d="flex" alignItems="baseline">
              {article.featured_image && (
                <Image image={article.featured_image.media} />
              )}
            </Box>
            <Box d="flex" alignItems="baseline">
              <Heading>{article.title}</Heading>
            </Box>
          </Box>
        </Box>
      </Link>
    </>
  );
};

export default Card;
