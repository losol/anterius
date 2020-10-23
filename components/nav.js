import React from "react";
import Link from "next/link";
import { Box, Heading, Flex, Text, Button } from "@chakra-ui/core";

const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);

const Nav = ({ article_categories, props, site_settings }) => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1.5rem"
        bg="gray.100"
        color="gray.900"
        {...props}
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
            <Link href="/">{site_settings.title}</Link>
          </Heading>
        </Flex>

        <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
          <svg
            fill="white"
            width="12px"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </Box>

        <Box
          display={{ sm: show ? "block" : "none", md: "flex" }}
          width={{ sm: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
        >
          {article_categories.map((category) => {
            return (
              <MenuItems>
                <Link as={`/category/${category.slug}`} href="/category/[id]">
                  {category.name}
                </Link>
              </MenuItems>
            );
          })}
        </Box>
      </Flex>
    </>
  );
};

export default Nav;
