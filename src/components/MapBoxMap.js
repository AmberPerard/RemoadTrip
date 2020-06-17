import React from "react";
// import ReactDOM from "react-dom";
import mapboxgl from "mapbox-gl";
// import Marker from "./components/Marker.js"
// import ReactMapGL, { Marker } from "react-map-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZWxsZW5zaWVyZW5zIiwiYSI6ImNrYmoyc2NwYzBqdjIyeXM3d3h2bW0xNGcifQ.AiHZhuCKL51mfLLdAf9dyQ";

class MapBoxMap extends React.Component {
  // Code from the next few steps will go here
  constructor(props) {
    super(props);
    this.state = {
      lng: 5,
      lat: 34,
      zoom: 2,
      userLocation: {},
    };
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });

    map.on("move", () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2),
      });
    });

    mapboxgl.accessToken =
      "pk.eyJ1IjoiZWxsZW5zaWVyZW5zIiwiYSI6ImNrYmoycTIyNTBsM2kycnB2eGZ3czczNjcifQ.MRi5rwt-X4q9xUd6fgP9Lw";

    var el = document.createElement("div");
    el.className = "autoMarker";

    el.addEventListener("click", function () {
      window.alert("alert");
    });

    new mapboxgl.Marker(el).setLngLat([30.5, 50.5]).addTo(map);

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav, "top-left");
  }

  render() {
    return (
      <div>
        <div className="sidebarStyle">
          <div>
            Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom:{" "}
            {this.state.zoom}
          </div>
        </div>
        <div ref={(el) => (this.mapContainer = el)} className="mapContainer" />
      </div>
    );
  }
}

export default MapBoxMap;
