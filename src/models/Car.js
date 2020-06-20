import { decorate, observable, action } from "mobx";
import { v4 } from "uuid";

class Car {
  constructor({ id = v4(), name, coordinates = [], store }) {
    this.id = id;
    this.name = name;
    this.coordinates = coordinates;
    this.store = store;
  }

  getLocationInfoCar(coordinates) {
    //zoekt in de database naar de informatie van de locatie bij de auto
  }
  getWeatherForCarLocation(coordinates) {
    //haalt via api de weersomstandigheden op van de de locatie van de auto
  }
}

decorate(Car, {
  coordinates: observable,
  getLocationInfoCar: action,
  getWeatherForCarLocation: action,
});

export default Car;
