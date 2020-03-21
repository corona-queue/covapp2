import { observable, action, decorate } from "mobx";
import { createContext } from "react";

class QuestionTreeStore {
  questions = {};
  answers = {};
  name = "Michael";

  setPage(page) {
    this.page = page;
  }
}

decorate(QuestionTreeStore, {
  questions: observable,
  answers: observable,
  name: observable,
  setPage: action
});

export default createContext(new QuestionTreeStore());
