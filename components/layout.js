import Nav from "./nav";
import { useContext } from "react";
import { GlobalContext } from "../pages/_app";

const Layout = ({ children, article_categories }) => {
  const siteSettings = useContext(GlobalContext);
  return (
    <>
      <Nav
        article_categories={article_categories}
        site_settings={siteSettings[0]}
      />
      {children}
    </>
  );
};

export default Layout;
