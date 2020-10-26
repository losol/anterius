import { GlobalContext } from "../pages/_app";
import Head from "next/head";
import { getMediaUrl } from "../lib/media";
import { useContext } from "react";

const Seo = ({ seo }) => {
  const siteSettings = useContext(GlobalContext);

  const defaultSeo = {
    title: siteSettings[0].title,
    description: siteSettings[0].description,
    featuredImage: siteSettings[0].featuredImage,
  };

  const fullSeo = {
    ...defaultSeo,
    ...seo,
  };

  return (
    <Head>
      {fullSeo.title && (
        <>
          <title>{fullSeo.title}</title>
          <meta property="og:title" content={fullSeo.title} />
          <meta name="twitter:title" content={fullSeo.title} />
        </>
      )}
      {fullSeo.description && (
        <>
          <meta name="description" content={fullSeo.metaDescription} />
          <meta property="og:description" content={fullSeo.metaDescription} />
          <meta name="twitter:description" content={fullSeo.metaDescription} />
        </>
      )}
      {fullSeo.featuredImage && (
        <>
          <meta
            property="og:image"
            content={getMediaUrl(fullSeo.featuredImage)}
          />
          <meta
            name="twitter:image"
            content={getMediaUrl(fullSeo.featuredImage)}
          />
          <meta name="image" content={getMediaUrl(fullSeo.featuredImage)} />
        </>
      )}
      {fullSeo.article && <meta property="og:type" content="article" />}
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default Seo;
