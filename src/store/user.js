import { observable } from "./lib/NoobX";

class User {
  constructor() {
    this.name = "Yauheni";
    return observable(this);
  }
  setName(name) {
    this.name = name;
  }
}

const defaultUser = new User();

window["user"] = defaultUser;

export default defaultUser;
