import { decorate, observable, action } from "mobx";
import socketIOClient from "socket.io-client";
import { v4 } from "uuid";

class Car {
  constructor({ id = v4(), name, coordinates = {}, lat = 0, lng = 0, store }) {
    this.id = id;
    this.name = name;
    this.coordinates = coordinates;
    this.lat = lat;
    this.lng = lng;
    this.store = store;

    this.ENDPOINTCAR = "https://evening-caverns-60077.herokuapp.com/";
    this.carSocket = socketIOClient(this.ENDPOINTCAR);
  }

  // getLocation = async () => {
  //   await this.carSocket.emit("getCoords", (data) => {
  //     if (
  //       data === "geen current coords" ||
  //       (data.latitude === 0 && data.longitude === 0 && data.altitude === 0)
  //     ) {
  //       const newData = {};
  //       newData.longitude = parseFloat("3.238466");
  //       newData.latitude = parseFloat("51.22316");
  //       console.log(newData);
  //       return newData;
  //       // car.coordinates.lat(parseFloat("51.22316"));
  //       // car.coordinates.lng(parseFloat("3.238466"));
  //     } else {
  //       console.log(data);
  //       return data;
  //       // car.coordinates.lat(parseFloat(data.latitude));
  //       // car.coordinates.lng(parseFloat(data.longitude));
  //     } // console.log(car.coordinates);
  //   });
  //   return "hallo";
  // };

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
