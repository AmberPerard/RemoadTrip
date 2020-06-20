import { createContext } from "react";
import RootStore from "../stores";
import Car from "../models/Car";
import { configure } from "mobx";

configure({ enforceActions: "observed" });

const store = new RootStore();

const car1 = new Car({
  id: "1",
});

store.carStore.seed([car1]);
window.store = store;

export const storesContext = createContext(store);
