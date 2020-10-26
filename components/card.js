import { Box, Image as ChakraImage, Heading } from "@chakra-ui/core";

import Image from "./image";
import Link from "next/link";
import React from "react";

const Card = ({ article }) => {
  return (
    <>
      <Link as={`/article/${article.slug}`} href="/article/[id]">
        <Box maxW="sm" bg="white" style={{ height: "100%" }} overflow="hidden">
          <Box d="flex" alignItems="baseline">
            {article.featured_image && (
              <Image image={article.featured_image.media} />
            )}
          </Box>
          <Box p="6">
            <Box d="flex" alignItems="baseline">
              <Heading as="h2" size="md">
                {article.title}
              </Heading>
            </Box>
          </Box>
        </Box>
      </Link>
    </>
  );
};

export default Card;
