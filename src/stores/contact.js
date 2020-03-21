import { observable, action, decorate, runInAction, computed } from "mobx";
import { createContext } from "react";

class ContactStore {
  firstname = "";
  lastname = "";
  phone = "";

  setAttribute(attribute, value) {
    this[attribute] = value;
  }

  getAttribute(attribute, value) {
    return this[attribute];
  }
}

decorate(ContactStore, {
  firstname: observable,
  lastname: observable,
  phone: observable,
  getAttribute: action,
  setAttribute: action
});

export default createContext(new ContactStore());
