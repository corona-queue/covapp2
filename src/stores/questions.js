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
  submitError = false;
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

  reset() {
    this.anwers  = {};
    this.submitted = [];
    this.question = 0;
    this.results = null;
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

    //traverse the tree and get all possible questions
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
    const visibleQuestions = this.openQuestions.filter(
      question => !question.hidden
    );
    const allAnswered = visibleQuestions.every(
      question => !!this.answers[question.id]
    );
    return visibleQuestions.length > 0 && allAnswered;
  }

  get progress() {
    const lastQuestion = this.openQuestions[this.openQuestions.length - 1];
    const answered = lastQuestion && !!this.answers[lastQuestion.id];
    return (
      ((this.questions.indexOf(lastQuestion) + (answered ? 1 : 0)) /
        this.questions.filter(question => !question.hidden).length) *
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
    let answers = this.openQuestions.reduce(
      (agg, question) => ({
        ...agg,
        [question.id]: this.answers[question.id]
      }),
      {}
    );

    getResults(answers)
      .then(results => {
        this.results = results;
        this.loadingResults = false;
      })
      .catch(() => {
        this.loadingResults = false;
      });
  }

  submitAnswers(id, contactInformation, afterSubmit) {
    this.isSubmitting = true;

    submitAnswers(contactInformation, this.answers)
      .then(success => {
        this.isSubmitting = false;
        this.submitted = [...this.submitted, id];
        afterSubmit();
      })
      .catch(error => {
        this.isSubmitting = false;
        this.submitError = true;
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
  submitted: observable,
  submitError: observable,
  results: observable,
  loadingResults: observable,
  currentQuestion: computed,
  finished: computed,
  openQuestions: computed,
  progress: computed,
  setPage: action,
  answer: action,
  loadQuestions: action,
  submitAnswers: action,
  setQuestions: action,
  nextQuestion: action,
  loadResults: action,
  reset: action,
});

export default createContext(new QuestionTreeStore(routerStore));
