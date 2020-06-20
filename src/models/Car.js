import { decorate, observable, action, computed } from "mobx";
import socketIOClient from "socket.io-client";
import { v4 } from "uuid";

class Car {
  constructor({ id = v4(), name, coordinates = {}, store }) {
    this.id = id;
    this.name = name;
    this.coordinates = coordinates;
    this.store = store;

    this.ENDPOINTCAR = "https://evening-caverns-60077.herokuapp.com/";
    this.carSocket = socketIOClient(this.ENDPOINTCAR);
  }

  getLocationInfoCar(coordinates) {
    //zoekt in de database naar de informatie van de locatie bij de auto
  }

  getLocation() {
    console.log("fetching");
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${this.longitude},${this.latitude}?access_token=${process.env.REACT_APP_apiKey_weather}`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          return result;
        },
        (error) => {
          return error;
        }
      );
  }

  getWeather() {
    //haalt via api de weersomstandigheden op van de de locatie van de auto
    console.log("fetching");
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${this.latitude}&lon=${this.longitude}&appid=${process.env.REACT_APP_apiKey_weather}`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          return result;
        },
        (error) => {
          return error;
        }
      );
  }

  get latitude() {
    return this.lat;
  }

  get longitude() {
    return this.lng;
  }
}
decorate(Car, {
  coordinates: observable,
  latitude: computed,
  longitude: computed,
  getWeather: action,
  getLocationInfoCar: action,
});

export default Car;
