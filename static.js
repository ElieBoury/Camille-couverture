export const data = {
  title: "Camille Couverture",
  companyNameGoogle: "Camille couverture presles",
  phone: "0644135134",
  address: "22 Rue de la Frm Seigneuriale, 95590 Presles",
  addresshref: "https://maps.app.goo.gl/3kFpNQRPpEnUjTZTA",
  companyName: "",
  description: "",
  siteurl: "",
  email: "",
  mainJob: "",
  mainCity: "",
  createdAt: "2025-01-01",
  aPropos: (
    <p>
      Un texte de présentation qui donne envie et optimisé pour le
      référencement.
    </p>
  ),
  services: [
    {
      title: "Service 1",
      description: "",
    },
    {
      title: "Service 2",
      description: "",
    },
    {
      title: "Service 3",
      description: "",
    },
  ],
  cities: [
    // {
    // title: "",
    // description: "",
    // slug: "",
    // },
  ],
  products: [
    // {
    //   title: "product",
    //   slug: "product",
    //   description: <></>,
    // },
  ],
};

export const getXY = () => {
  const xy = data.cities.map((city) => {
    return data.products.map((product) => {
      return {
        title: product.title + " à " + city.title,
        slug: product.slug + "-a-" + city.slug,
        description: city.description,
      };
    });
  });

  const cities = data.cities.map((city) => {
    return {
      title: data.mainJob + " à " + city.title,
      slug: data.mainJob + "-a-" + city.slug,
      description: city.description,
    };
  });

  return xy.flat().concat(cities);
};
