import { observable, action, decorate } from "mobx";
import { createContext } from "react";

class NoticeStore {
  noticeTaken = false;

  userTookNotice() {
    this.noticeTaken = true;
  }
}

decorate(NoticeStore, {
  noticeTaken: observable,
  userTookNotice: action
});

export default createContext(new NoticeStore());
