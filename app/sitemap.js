import { data } from "@/static";

export default async function sitemap() {
  const url = "https://" + data.siteurl;

  let sitemap = [
    {
      url: url + "/",
      lastModified: data.createdAt,
      changeFrequency: "yearly",
      priority: 1,
    },
  ];

  data.cities.forEach((city) => {
    sitemap.push({
      url: `${url}/${city.slug}`,
      lastModified: data.createdAt,
      changeFrequency: "yearly",
      priority: 0.8,
    });
  });

  return sitemap;
}
