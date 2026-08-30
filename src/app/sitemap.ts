import type { MetadataRoute } from "next";

const baseUrl = "https://www.tswp.org";

const routes = [
  "",
  "/about",
  "/contact",
  "/donate",
  "/fundraisers",
  "/human-adenoviruses-in-drinking-water",
  "/pilot-project",
  "/sponsorships",
  "/spud-cells",
  "/student-publications",
  "/volunteer",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
