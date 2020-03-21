import { observable, action, decorate, runInAction } from "mobx";
import { createContext } from "react";
import { get } from "./api";

class QuestionTreeStore {
  questions = [];
  answers = {};
  name = "Michael";
  loading = false;
  isSubmitting = false;
  question = 0;

  setQuestion(question) {
    this.question = question;
  }

  answer(question, option) {
    console.log(question, option);
  }

  loadQuestions(page) {
    this.loading = true;
    get("").then(questions => {
      this.questions = questions;
      this.loading = false;
    });
  }

  submitAnswers() {
    this.isSubmitting = true;

    setTimeout(() => {
      runInAction(() => {
        console.log("Submitting answers");
        this.isSubmitting = false;
      });
    }, 2000);
  }
}

decorate(QuestionTreeStore, {
  questions: observable,
  answers: observable,
  loading: observable,
  isSubmitting: observable,
  setPage: action,
  loadQuestions: action,
  submitAnswers: action,
  setQuestions: action
});

export default createContext(new QuestionTreeStore());
