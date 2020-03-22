import { observable, action, decorate, computed } from "mobx";
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

  reset() {
    this.firstname = "";
    this.lastname = "";
    this.phone = "";
  }

  get meta() {
    const { firstname, lastname, phone } = this;
    return { firstname, lastname, phone };
  }

  get isComplete() {
    return this.firstname !== "" && this.lastname !== "" && this.phone !== "";
  }
}

decorate(ContactStore, {
  firstname: observable,
  lastname: observable,
  phone: observable,
  isComplete: computed,
  meta: computed,
  getAttribute: action,
  setAttribute: action,
  reset: action,
});

export default createContext(new ContactStore());
