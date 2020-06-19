import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import { ROUTES } from "../../consts";
import socketIOClient from "socket.io-client";
import { useHistory } from "react-router-dom";

mapboxgl.accessToken = process.env.REACT_APP_apiKey;

const MapBoxMap = () => {
  let history = useHistory();
  const ENDPOINT = "https://evening-caverns-60077.herokuapp.com/";
  let set = false;
  const marker = useRef();

  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);
  const [lng, setLng] = useState(5);
  const [lat, setLat] = useState(34);

  let socket = socketIOClient(ENDPOINT);

  if (set === false) {
    set = true;
    socket.emit("getCoords", (data) => {
      console.log(data);
      if (
        data === "geen current coords" ||
        (data.latitude === 0 && data.longitude === 0 && data.altitude === 0)
      ) {
        console.log("ik heb geen gps");
        setLat(parseFloat("51.22316"));
        setLng(parseFloat("3.238466"));
      } else {
        setLat(parseFloat(data.latitude));
        setLng(parseFloat(data.longitude));
      }
      console.log(lat, lng);
    });
  }

  var el = document.createElement("div");
  el.className = "autoMarker";

  el.addEventListener("click", function () {
    history.push(ROUTES.cardetails.to);
  });

  useEffect(() => {
    mapboxgl.accessToken = process.env.REACT_APP_accessToken;
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: process.env.REACT_APP_styleKey,
        center: [lng, lat],
        zoom: 2,
      });
      const nav = new mapboxgl.NavigationControl();
      map.addControl(nav, "bottom-right");
      marker.current = new mapboxgl.Marker(el).setLngLat([lng, lat]).addTo(map);

      map.on("load", () => {
        setMap(map);
        map.resize();
      });
    };

    if (!map) initializeMap({ setMap, mapContainer });
    // return () => {
    //   marker.remove();
    // };
  }, [el, lat, lng, map, marker]);

  return (
    <div className="container__map">
      <div ref={(el) => (mapContainer.current = el)} className="mapContainer" />
    </div>
  );
};

export default MapBoxMap;
