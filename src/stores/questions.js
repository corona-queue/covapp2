import { observable, action, decorate, computed } from "mobx";
import { createContext } from "react";
import { getQuestions, getResults, submitAnswers } from "./api";
import routerStore from "./router";

class QuestionTreeStore {
  questions = [];
  answers = {};
  name = "Michael";
  loading = false;
  isSubmitting = false;
  submitted = [];
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
    if (this.questions.length === 0) {
      return null;
    }
    return this.questions[this.question];
  }

  getQuestionIndexById(id) {
    for (var i = 0; i < this.questions.length; i++) {
      if (this.questions[i].id === id) {
        return i;
      }
    }
    return -1;
  }

  answer(question, option) {
    const answeredQuestion = this.questions.find(q => q.id === question);
    this.answers = {
      ...this.answers,
      [answeredQuestion.id]: option
    };
  }

  get openQuestions() {
    var openQuestions = [];

    if (this.questions.length === 0) return openQuestions;

    //traversier den Baum und gib alle möglichen Fragen zurück, mit der aktuellen Fragekette
    var pointer = this.questions[0];
    let i = 1000;
    openQuestions.push(pointer);
    do {
      let answered = this.answers[pointer.id];
      if (Array.isArray(pointer.nextQuestionMap)) {
        let pointerOption = this.answers[pointer.id];
        let optionIndex = pointer.options.findIndex(
          o => o.id === pointerOption
        );
        let nextQuestionId = pointer.nextQuestionMap[optionIndex];
        pointer = this.questions.find(q => q.id === nextQuestionId);
      } else if (pointer.nextQuestionMap) {
        // eslint-disable-next-line
        pointer = this.questions.find(q => q.id === pointer.nextQuestionMap);
      } else {
        let nextQuestionIndex = this.questions.indexOf(pointer);
        pointer =
          this.questions.length <= nextQuestionIndex
            ? null
            : this.questions[nextQuestionIndex + 1];
      }
      i--;
      if (pointer && answered) {
        openQuestions.push(pointer);
      } else {
        i = 0;
      }
    } while (pointer && i > 0);
    return openQuestions;
  }

  get finished() {
    const lastQuestion = this.questions[this.questions.length - 1];
    const lastQuestionShowed = this.openQuestions.indexOf(lastQuestion) > 0;
    return lastQuestionShowed && !!this.answers[lastQuestion.id];
  }

  get progress() {
    const lastQuestion = this.openQuestions[this.openQuestions.length - 1];
    const answered = lastQuestion && !!this.answers[lastQuestion.id];
    return (
      ((this.questions.indexOf(lastQuestion) + (answered ? 1 : 0)) /
        this.questions.length) *
      100
    );
  }

  loadQuestions() {
    this.loading = true;
    getQuestions().then(questions => {
      this.questions = questions;
      this.loading = false;
    });
  }

  loadResults() {
    this.loadingResults = true;
    getResults(this.answers)
      .then(results => {
        this.results = results;
        this.loadingResults = false;
      })
      .catch(() => {
        this.loadingResults = false;
      });
  }

  submitAnswers(id, contactInformation) {
    this.isSubmitting = true;

    submitAnswers(contactInformation, this.answers)
      .then(success => {
        this.isSubmitting = false;
        this.submitted = [...this.submitted, id];
        console.log("Sucessful");
      })
      .catch(error => {
        this.isSubmitting = false;
        console.error(error);
      });
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
  openQuestions: computed,
  progress: computed,
  setPage: action,
  answer: action,
  loadQuestions: action,
  submitAnswers: action,
  setQuestions: action,
  nextQuestion: action,
  loadResults: action
});

export default createContext(new QuestionTreeStore(routerStore));
