"use client";

import { useJsApiLoader } from "@react-google-maps/api";
import { Spin } from "antd";

const libraries = ["places", "drawing", "geometry"];

const GoogleProvider = ({ children }) => {
  const { isLoaded: scriptLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCQCtAebaL_oayla0LYd1m9xtj2lZI7Yh0",
    libraries: libraries,
    language: "fr",
  });

  if (loadError) return <p>Encountered error while loading google maps</p>;

  if (!scriptLoaded) return <Spin />;

  return children;
};

export default GoogleProvider;
