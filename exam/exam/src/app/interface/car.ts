import {Place} from "./place";

export interface Car {
  id?: number;
  typeCar?: string;
  nameGarage?: string;
  placeFrom?: Place;
  placeTo?: Place;
  phone?: number;
  email?: string;
  timeStart?: string;
  timeEnd?: string;
}
