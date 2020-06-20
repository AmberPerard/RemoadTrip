import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import { ROUTES } from "../../consts";
import { useHistory } from "react-router-dom";
import { useStores } from "../../hooks/useStores.js";
import { useObserver } from "mobx-react-lite";

mapboxgl.accessToken = process.env.REACT_APP_apiKey;

const MapBoxMap = ({ controls, classForMap, zoom }) => {
  let history = useHistory();
  const { carStore } = useStores();
  const [coords, setCoords] = useState();

  // const marker = useRef(null);
  console.log(carStore.cars);

  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  var el = document.createElement("div");
  el.className = "autoMarker";

  el.addEventListener("click", function () {
    history.push(ROUTES.cardetails.to);
  });
  console.log(carStore.cars[0].coordinates.lng);

  useEffect(() => {
    console.log("useEffect triggerd");
    mapboxgl.accessToken = process.env.REACT_APP_accessToken;
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: process.env.REACT_APP_styleKey,
        center: [0, 0],
        zoom: zoom,
        interactive: controls,
      });
      //console.log(map);

      const nav = new mapboxgl.NavigationControl({
        showCompass: controls,
        showZoom: controls,
        visualizePitch: controls,
      });
      map.addControl(nav, "bottom-right");

      carStore.cars.forEach((car) => {
        if (car.coordinates.lng) {
          new mapboxgl.Marker(el)
            .setLngLat([car.coordinates.lng, car.coordinates.lat])
            .addTo(map);
        }
        console.log("loading");
      });

      map.on("load", () => {
        setMap(map);
        map.resize();
      });
    };

    if (!map) initializeMap({ setMap, mapContainer });
    // return () => {
    //   marker.remove();
    // };
  }, [carStore.cars, controls, el, map, zoom]);

  return useObserver(() => (
    <div className="container__map">
      <div ref={(el) => (mapContainer.current = el)} className={classForMap} />
    </div>
  ));
};

export default MapBoxMap;
