import { Injectable } from '@angular/core';
import { QuestionModel } from '../models/questions';
import { Observable, of } from 'rxjs';
import { AnswerModel } from '../models/answer';
import { allQuestions } from './allquestions';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  questions: QuestionModel[];
  activeQuestion: QuestionModel;
  answers = []

  constructor() { this.initQuestions(); }

  countQuestions() {
    return this.questions.length;
  }

  countAnswers() {
    return this.answers.length;
  }

  saveAnswer(answeredQuestion: QuestionModel, selectedAnswer: String) {
    const {id, question} = answeredQuestion;
    const answerObject = this.activeQuestion.answers.find(a => a.id == selectedAnswer);
    const { text: answer, correct } = answerObject;
    this.answers.push({ id, question, answer, correct })
  }

  getResults() {
    const answers = this.answers;
    this.answers = [];
    return of(answers);
  }

  getNextQuestion(): Observable<QuestionModel> {
    this.activeQuestion = this.questions.pop();
    return of(this.activeQuestion);
  }

  getAnswers(): Observable<AnswerModel[]> {
    return of(this.activeQuestion && this.activeQuestion.answers ?
      this.activeQuestion.answers : []);
  }

  private readonly randomSort = () => Math.random() - Math.random()
  initQuestions() {
    const answersIds = ['A','B','C','D','E']
    this.questions = allQuestions
      .sort(this.randomSort)
      .map( (q: QuestionModel) => Object.assign(
        q, {
          answers: q.answers.sort(this.randomSort).map( (a, index) => Object.assign( a, {id: answersIds[index]} ) )
        }
      ) );
  }
}
