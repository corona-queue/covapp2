import { observable, action, decorate, runInAction, computed } from "mobx";
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

  get currentQuestion() {
    return this.questions[this.question];
  }

  getQuestionIndexById(id) {
    for (var i = 0; i < this.questions.length; i++) {
      if (this.questions[i].id == id) {
        return i;
      }
    }
    return -1;
  }

  nextQuestion(selectedOptionIndex) {
    const currentQuestion = this.questions[this.question];
    const nextQuestions = currentQuestion.nextQuestionMap;
    let nextQuestionId;

    if (nextQuestions == null) {
      this.question++;
    } else {
      if (Array.isArray(nextQuestions)) {
        nextQuestionId = nextQuestions[selectedOptionIndex];
      } else { // single string id
        nextQuestionId = nextQuestions;
      }
      this.question = this.getQuestionIndexById(nextQuestionId);
    }
    console.log(this.questions[this.question].id);
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
  question: observable,
  isSubmitting: observable,
  currentQuestion: computed,
  setPage: action,
  loadQuestions: action,
  submitAnswers: action,
  setQuestions: action,
  nextQuestion: action
});

export default createContext(new QuestionTreeStore());
