import { decorate, observable, action, computed } from "mobx";
// import CarService from "../services/CarService";

class CarStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    // this.CarService = new CarService(this.rootStore.firebase);
    this.cars = [];
  }

  seed(data) {
    this.cars.push(...data);
  }

  getCarsById = (id) => this.cars.find((car) => car.id === id);

  empty() {
    this.cars = [];
  }
}
decorate(CarStore, {
  cars: observable,
  empty: action,
});
export default CarStore;
