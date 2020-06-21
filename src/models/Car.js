import { decorate, observable, action, computed } from "mobx";
import socketIOClient from "socket.io-client";
import { v4 } from "uuid";

class Car {
  constructor({
    id = v4(),
    name,
    lat,
    lng,
    coordinates = {},
    store,
    weather = undefined,
  }) {
    this.id = id;
    this.name = name;
    this.coordinates = coordinates;
    this.store = store;
    this.lat = lat;
    this.lng = lng;
    this.weather = weather;

    this.ENDPOINTCAR = "https://evening-caverns-60077.herokuapp.com/";
    this.carSocket = socketIOClient(this.ENDPOINTCAR);
  }

  getLocationInfoCar(coordinates) {
    //zoekt in de database naar de informatie van de locatie bij de auto
  }

  getLocation() {
    console.log("fetching");
    console.log(this.coordinates.lng);
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${this.lng},${this.lat}.json?access_token=${process.env.REACT_APP_apiKey}`
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
    console.log(
      `http://api.openweathermap.org/data/2.5/weather?lat=${this.latitude}&lon=${this.longitude}&appid=${process.env.REACT_APP_apiKey_weather}`
    );
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${this.latitude}&lon=${this.longitude}&appid=${process.env.REACT_APP_apiKey_weather}`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setWeather(result)
          // return result;
        },
        (error) => {
          return error;
        }
      );
  }

  setWeather(weather) {
    this.weather = weather;
  }

  get latitude() {
    return this.lat;
  }

  get longitude() {
    return this.lng;
  }
}
decorate(Car, {
  weather: observable,
  coordinates: observable,
  lat: observable,
  lng: observable,
  latitude: computed,
  longitude: computed,
  getWeather: action,
  getLocation: action,
  getLocationInfoCar: action,
  setWeather: action,
});

export default Car;
