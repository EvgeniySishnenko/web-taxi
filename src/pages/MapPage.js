import React from "react";
import { useSelector } from "react-redux";
import Header from "../Components/Header/Header";
import MapForm from "../Components/Map/MapForm";
import MapMessage from "../Components/Map/MapMessage";
import Map from "../Components/Map/Map";

export default function MapPage() {
  const { isRoute } = useSelector((state) => state.route);
  return (
    <>
      <Header />
      <Map />
      {isRoute ? <MapMessage /> : <MapForm />}
    </>
  );
}
