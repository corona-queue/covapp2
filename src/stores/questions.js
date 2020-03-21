import { observable, action, decorate, runInAction, computed } from "mobx";
import { createContext } from "react";
import { getQuestions, getResults, submitAnswers } from "./api";
import routerStore from "./router";

class QuestionTreeStore {
  questions = [];
  answers = {};
  name = "Michael";
  loading = false;
  isSubmitting = false;
  question = 0;

  // getting results
  results = null;
  loadingResults = false;

  constructor(routerStore) {
    this.routerStore = routerStore;
  }

  setQuestion(question) {
    this.question = parseInt(question);
  }

  get currentQuestion() {
    if (this.questions.length == 0) {
      return null;
    }
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
    let questionParam;

    if (nextQuestions == null) {
      questionParam = this.question + 1;
    } else {
      if (Array.isArray(nextQuestions)) {
        nextQuestionId = nextQuestions[selectedOptionIndex];
      } else {
        // single string id
        nextQuestionId = nextQuestions;
      }
      questionParam = this.getQuestionIndexById(nextQuestionId);
    }

    this.routerStore.history.push(`/test/${questionParam}`);
  }

  loadQuestions(page) {
    this.loading = true;
    getQuestions().then(questions => {
      this.questions = questions;
      this.loading = false;
    });
  }

  get requestBody() {
    return { q01: "q01_option2", q02: "q02_option1" };
  }

  loadResults() {
    this.loadingResults = true;
    getResults(this.requestBody)
      .then(results => {
        this.results = results;
        this.loadingResults = false;
      })
      .catch(() => {
        this.loadingResults = false;
      });
  }

  submitAnswers(contactInformation) {
    this.isSubmitting = true;

    submitAnswers(contactInformation, this.requestBody)
      .then(success => console.log("Sucessful"))
      .catch(error => console.error(error));
  }
}

decorate(QuestionTreeStore, {
  questions: observable,
  answers: observable,
  loading: observable,
  question: observable,
  isSubmitting: observable,
  results: observable,
  loadingResults: observable,
  currentQuestion: computed,
  requestBody: computed,
  setPage: action,
  loadQuestions: action,
  submitAnswers: action,
  setQuestions: action,
  nextQuestion: action,
  loadResults: action
});

export default createContext(new QuestionTreeStore(routerStore));
