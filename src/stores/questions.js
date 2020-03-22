import { observable, action, decorate, runInAction, computed } from "mobx";
import { createContext } from "react";
import { get } from "./api";
import routerStore from "./router";

class QuestionTreeStore {
  questions = [];
  answers = {};
  name = "Michael";
  loading = false;
  isSubmitting = false;
  question = 0;

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

  answer(question, option) {
    const answeredQuestion = this.questions.find(q => q.id == question);
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
        let optionIndex = pointer.options.findIndex(o => o.id == pointerOption);
        let nextQuestionId = pointer.nextQuestionMap[optionIndex];
        pointer = this.questions.find(q => q.id == nextQuestionId);
      } else if (pointer.nextQuestionMap) {
        pointer = this.questions.find(q => q.id == pointer.nextQuestionMap);
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

  loadQuestions() {
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
  openQuestions: computed,
  setPage: action,
  answer: action,
  loadQuestions: action,
  submitAnswers: action,
  setQuestions: action,
  nextQuestion: action
});

export default createContext(new QuestionTreeStore(routerStore));
