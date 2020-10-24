import React from "react";
import Link from "next/link";
import {
  Box,
  Heading,
  Flex,
  IconButton,
  List,
  ListItem,
  Text,
  Button,
  useColorMode,
} from "@chakra-ui/core";
import ToggleLight from "./togglelight";

const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);

const Nav = ({ article_categories, props, site_settings }) => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = { light: "white", dark: "gray.900" };
  const altBgColor = { light: "gray.200", dark: "gray.700" };
  const color = { light: "gray.700", dark: "gray.100" };

  return (
    <>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1.5rem"
        bg={bgColor[colorMode]}
        color={color[colorMode]}
        {...props}
      >
        <Flex align="center" mr={5}>
          <Heading
            as="h1"
            fontSize={["lg", "lg", "lg", "lg"]}
            letterSpacing={"-.1rem"}
          >
            <Link href="/">{site_settings.title}</Link>
          </Heading>
        </Flex>

        <Button
          leftIcon={show ? "close" : "hamburger"}
          border={show ? "2px" : "0"}
          borderColor="teal.800"
          onClick={handleToggle}
          variant="ghost"
        >
          Meny
        </Button>
      </Flex>
      <List
        bg={altBgColor[colorMode]}
        display={{ xs: show ? "block" : "none" }}
        p="5"
        width={{ sm: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
      >
        {article_categories.map((category) => {
          return (
            <ListItem py="5" key="{category.slug}">
              <Link as={`/category/${category.slug}`} href="/category/[id]">
                {category.name}
              </Link>
            </ListItem>
          );
        })}
        <ToggleLight />
      </List>
    </>
  );
};

export default Nav;
