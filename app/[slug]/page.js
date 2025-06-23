import Home from "@/containers/Home/Home";
import { data } from "@/static";
import { notFound } from "next/navigation";

export async function generateMetadata({ params, searchParams }, parent) {
  const slug = (await params).slug;

  const city = data.cities.find((city) => city.slug === slug);

  if (!city) return null;

  return {
    title: city.title,
    description: city.description,
  };
}

export default async function Page({ params, searchParams }) {
  const slug = (await params).slug;
  const city = data.cities.find((city) => city.slug === slug);

  if (!city) return notFound();

  return <Home title={city.title} />;
}
