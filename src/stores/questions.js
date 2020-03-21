import { observable, action, decorate } from "mobx";
import { createContext } from "react";
import { get } from "./api";

class QuestionTreeStore {
  questions = {};
  answers = {};
  name = "Michael";
  loading = false;

  setPage(page) {
    this.page = page;
  }

  loadQuestions(page) {
    this.loading = true;
    get("").then(questions => {
      this.questions = questions;
      this.loading = false;
    });
  }
}

decorate(QuestionTreeStore, {
  questions: observable,
  answers: observable,
  loading: observable,
  setPage: action,
  loadQuestions: action
});

export default createContext(new QuestionTreeStore());
