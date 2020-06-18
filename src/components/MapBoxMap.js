import React from "react";
import mapboxgl from "mapbox-gl";
import socketIOClient from "socket.io-client";

const ENDPOINT = "https://evening-caverns-60077.herokuapp.com/";
let set = false;

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
      location: {},
    };
    this.socket = socketIOClient(ENDPOINT);
  }

  componentDidMount() {
    if (set === false) {
      set = true;
      this.socket.emit("getCoords", (data) => {
        console.log(data);
        if (
          data === "geen current coords" ||
          (data.latitude === 0 && data.longitude === 0 && data.altitude === 0)
        ) {
          console.log("ik heb geen gps");
          this.setState({
            location: {
              lat: parseFloat("51.22316"),
              lng: parseFloat("3.238466"),
            },
          });
        } else {
          this.setState({
            location: {
              lat: parseFloat(data.latitude),
              lng: parseFloat(data.longitude),
            },
          });
        }
        console.log(this.state.location.lat, this.state.location.lng);
        new mapboxgl.Marker(el)
          .setLngLat([this.state.location.lng, this.state.location.lat])
          .addTo(this.map);
        console.log(this.state.location.lat, this.state.location.lng);
      });
    }

    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style:
        "mapbox://styles/ellensierens/ckbjen2be23431imn95rk4a5n?optimize=true",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });

    this.map.on("move", () => {
      this.setState({
        lng: this.map.getCenter().lng.toFixed(4),
        lat: this.map.getCenter().lat.toFixed(4),
        zoom: this.map.getZoom().toFixed(2),
      });
    });

    mapboxgl.accessToken =
      "pk.eyJ1IjoiZWxsZW5zaWVyZW5zIiwiYSI6ImNrYmoycTIyNTBsM2kycnB2eGZ3czczNjcifQ.MRi5rwt-X4q9xUd6fgP9Lw";

    var el = document.createElement("div");
    el.className = "autoMarker";

    el.addEventListener("click", function () {
      window.alert("alert");
    });

    // if(set === true){
    //     new mapboxgl.Marker(el).setLngLat([this.state.location.lat, this.state.location.lng]).addTo(map);
    // }

    const nav = new mapboxgl.NavigationControl();
    this.map.addControl(nav, "top-left");
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    return (
      <div className="container__map">
        <div ref={(el) => (this.mapContainer = el)} className="mapContainer" />
      </div>
    );
  }
}

export default MapBoxMap;
