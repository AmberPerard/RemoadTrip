import { decorate, observable, action } from "mobx";
// import CarService from "../services/CarService";
import SocketService from "../services/SocketService";
class CarStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    // this.CarService = new CarService(this.rootStore.firebase);
    this.cars = [];
    this.socketService = new SocketService({
      onCoords: this.onCoords,
      // onName: this.onName,
      // onConnect: this.onConnect,
      // onList: this.onList,
      // onDisconnect: this.onDisconnect,
    });
  }

  seed(data) {
    console.log(this.cars);
    this.cars.push(...data);
    console.log(this.cars);
  }

  onCoords = (data) => {
    this.cars.forEach((car) => {
      if (
        data === "geen current coords" ||
        (data.latitude === 0 && data.longitude === 0 && data.altitude === 0)
      ) {
        car.coordinates.lat = parseFloat("51.22316");
        car.coordinates.lng = parseFloat("3.238466");
        car.lat = parseFloat("51.22316");
        car.lng = parseFloat("3.238466");
      } else {
        car.coordinates.lat = parseFloat(data.latitude);
        car.coordinates.lng = parseFloat(data.longitude);
        car.lat = parseFloat(data.latitude);
        car.lng = parseFloat(data.longitude);
      }
    });
    console.log(this.cars);
  };

  // getLocationforCar = async () => {
  //   this.cars.forEach(async (car) => {
  //     const coords = await car.getLocation();
  //     console.log(coords);
  //     car.coordinates.lng = coords.longitude;
  //     car.coordinates.lat = coords.latitude;
  //   });
  //   console.log(this.cars);
  // };

  getCarsById = (id) => this.cars.find((car) => car.id === id);

  empty() {
    this.cars = [];
  }
}
decorate(CarStore, {
  cars: observable,
  empty: action,
  onCoords: action,
});
export default CarStore;
