import { Injectable } from '@angular/core';
import { QuestionModel } from '../models/questions';
import { Observable, of } from 'rxjs';
import { AnswerModel } from '../models/answer';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  questions: QuestionModel[];
  activeQuestion: QuestionModel;
  answers = []

  constructor() { this.questions = this.initQuestions(); }

  saveAnswer(answer) {
    this.answers.push({ id: answer, correct: this.isAnswerCorrect(answer) })
  }

  isAnswerCorrect(answer) {
    console.log( 'answer', answer )
    console.log( this.activeQuestion.answers.find(a => a.id == answer) )
    return this.activeQuestion.answers.find(a => a.id == answer).correct;
  }

  getNextQuestion(): Observable<QuestionModel> {
    this.activeQuestion = this.questions.pop();
    return of(this.activeQuestion);
  }

  getAnswers(): Observable<AnswerModel[]> {
    return of(this.activeQuestion.answers);
  }


  private initQuestions(): QuestionModel[] {
    return [
      {
        id: '3',
        question: 'A arquitetura de um agente determina, dentre outras características, a forma como os agentes se comunicam entre si e desempenham suas funções. Sobre as diversas arquiteturas dos agentes, marque a alternativa CORRETA:',
        topic: 'Inteligência Artificial',
        answers: [
          {id: '1', text: 'Nos casos em que os agentes possuem facilitadores (representantes), os gerentes da arquitetura escravo-mestre se comunicam com esses facilitadores e não com os agentes subordinados.' , correct: false, },
          {id: '2', text: 'Dentre os diversos tipos de arquitetura, não há nenhum que contenha apenas um agente;', correct: false, },
          {id: '3', text: 'Na arquitetura de troca de mensagens os agentes podem se comunicar diretamente, porém devem utilizar protocolos específicos para essa finalidade.', correct: true, },
          {id: '4', text: 'A arquitetura de mecanismos de mercado é um dos exemplos de classificação baseada na forma pela qual os agentes cooperam entre si.', correct: false, },
          {id: '5', text: 'A arquitetura do quadro-negro, uma das arquiteturas focadas na cooperação, é caracterizada pela intensa comunicação direta que ocorre entre os agentes.', correct: false, },
        ],
      },
      {
        id: '1',
        question: 'teste',
        topic: 'Inteligência Artificial',
        answers: [
          {id: '1', text: 'resposta 1', correct: false, },
          {id: '2', text: 'resposta 2', correct: false, },
          {id: '3', text: 'resposta 3', correct: true, },
          {id: '4', text: 'resposta 4', correct: false, },
          {id: '5', text: 'resposta 5', correct: false, },
        ],
      },
      {
        id: '2',
        question: 'teste 2',
        topic: 'Inteligência Artificial',
        answers: [
          {id: '1', text: 'resposta 1', correct: false, },
          {id: '2', text: 'resposta 2', correct: false, },
          {id: '3', text: 'resposta 3', correct: false, },
          {id: '4', text: 'resposta 4', correct: false, },
          {id: '5', text: 'resposta 5', correct: true, },
        ],
      },
    ];
  }

}
