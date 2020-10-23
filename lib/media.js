import { getStrapiURL } from "./api";

export function getMediaUrl(media) {
  const imageUrl = media.url.startsWith("/")
    ? getStrapiURL(media.url)
    : media.url;
  return imageUrl;
}
