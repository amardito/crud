import { ObjectID } from "mongodb";

export let url = new String();
export let database = new String();
export let collection = new String();

export const ObjectID = (param = new String()) => {
  return new ObjectID(param);
}

export const setup = (u,d,c) => {
  url = u;database = d;collection = c;
}

