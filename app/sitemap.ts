import { generals } from "@/data/generals";
import type { MetadataRoute } from "next";
import { EPISODES, episodePath } from "@/data/roman-empire";
import { MED_BOOKS } from "@/data/meditations";
import { rulers } from "@/data/rulers";
import { wars } from "@/data/wars";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/origins",
    "/map",
    "/city",
    "/rulers",
    "/family-tree",
    "/cleopatra",
    "/wars",
    "/generals",
    "/generals/quiz",
    ...generals.map((g) => `/generals/${g.slug}`),
    "/daily",
    "/army",
    "/myth-links",
    "/movies",
    "/sources",
    "/roman-empire",
    "/meditations",
    "/meditations/stoicism",
    "/meditations/teachers",
    "/meditations/quiz",
    ...MED_BOOKS.map((b) => `/meditations/book-${b.n}`),
    "/roman-empire/s1",
    "/roman-empire/s2",
    "/roman-empire/s3",
    ...EPISODES.map(episodePath),
    ...rulers.map((ruler) => `/rulers/${ruler.slug}`),
    ...wars.map((war) => `/wars/${war.slug}`),
  ];
  return paths.map((path) => ({ url: `${SITE_URL}${path}` }));
}
