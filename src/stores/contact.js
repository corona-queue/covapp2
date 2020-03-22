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

  get meta() {
    const { firstname, lastname, phone } = this;
    return { firstname, lastname, phone };
  }
}

decorate(ContactStore, {
  firstname: observable,
  lastname: observable,
  phone: observable,
  meta: computed,
  getAttribute: action,
  setAttribute: action
});

export default createContext(new ContactStore());
