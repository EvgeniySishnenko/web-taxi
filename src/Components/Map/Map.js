import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import mapboxgl from "mapbox-gl";

function Map() {
  const { route } = useSelector((state) => state.route);
  const [map, setMap] = useState();

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1Ijoic2lzaG5lbmtvIiwiYSI6ImNrZmZudDhzejA2MHoycnM1enYxdG1tbzkifQ.FSUjLnCh5vPuZe6Dn1LoPw";
    setMap(
      new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v9",
        center: [30.2656504, 59.8029126],
        zoom: 11,
      })
    );
  }, []);

  useEffect(() => {
    if (route && route.length !== 0) {
      map.addLayer({
        id: "route",
        type: "line",
        source: {
          type: "geojson",
          data: {
            type: "Feature",
            properties: {},
            geometry: {
              type: "LineString",
              coordinates: route,
            },
          },
        },
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "#c2423a",
          "line-width": 8,
        },
      });
      map.flyTo({
        center: route && route[0],
        zoom: 13,
      });
    } else {
      if (map && map.getLayer("route")) {
        map.removeLayer("route");
        map.removeSource("route");
        map.flyTo({
          zoom: 11,
        });
      }
    }
  }, [route]);

  return <div id="map"></div>;
}

export default Map;
