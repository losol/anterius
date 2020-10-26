import { List, ListItem, SimpleGrid } from "@chakra-ui/core";

import Card from "./card";
import React from "react";

const Articles = ({ articles }) => {
  return (
    <>
      <SimpleGrid as="ul" columns={[1, 2, 3]} spacing={1}>
        {articles.map((article, i) => {
          return (
            <ListItem p="5" display="block">
              <Card article={article} key={article.slug} height="280px" />
            </ListItem>
          );
        })}
      </SimpleGrid>
    </>
  );
};

export default Articles;
