import type { MetadataRoute } from "next";
import { EPISODES, episodePath } from "@/data/roman-empire";
import { rulers } from "@/data/rulers";
import { wars } from "@/data/wars";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/origins",
    "/map",
    "/rulers",
    "/family-tree",
    "/cleopatra",
    "/wars",
    "/daily",
    "/army",
    "/myth-links",
    "/movies",
    "/sources",
    "/roman-empire",
    "/roman-empire/s1",
    "/roman-empire/s2",
    "/roman-empire/s3",
    ...EPISODES.map(episodePath),
    ...rulers.map((ruler) => `/rulers/${ruler.slug}`),
    ...wars.map((war) => `/wars/${war.slug}`),
  ];
  return paths.map((path) => ({ url: `${SITE_URL}${path}` }));
}
