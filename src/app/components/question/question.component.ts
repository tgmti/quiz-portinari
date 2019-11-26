import { Component, OnInit } from '@angular/core';
import { PoRadioGroupOption, PoTableColumn } from '@portinari/portinari-ui';
import { QuestionModel } from 'src/app/models/questions';
import { QuestionsService } from 'src/app/services/questions.service';
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { AnswerModel } from 'src/app/models/answer';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  $question: Observable<QuestionModel>;
  $answers: Observable<AnswerModel[]>;
  $results: Observable<any[]> = null;

  resultColumns = this.loadResultColumns();

  answersOptions: PoRadioGroupOption[] = [];

  selectedAnswer = '';
  totalPoints = 0;

  constructor(private questionsService: QuestionsService) {
  }

  ngOnInit() {
    console.log('load');
    this.loadQuestion();
  }

  loadQuestion() {
    this.$question = this.questionsService.getNextQuestion();
    this.$answers = this.questionsService.getAnswers().pipe(
      tap(answers => this.answersOptions = answers.map(q => ({ value: q.id, label: q.id })))
    );
  }

  async save() {
    const question = await this.$question.toPromise();
    this.questionsService.saveAnswer(question, this.selectedAnswer);
    this.selectedAnswer = '';
    this.loadQuestion();
  }

  results() {
    console.log('results');
    this.$results = this.questionsService.getResults().pipe(
      tap( result => this.totalPoints = result.filter(res => res.correct).length )
    );
    console.log(this.$results);
  }

  countQuestions() {
    return this.questionsService.countQuestions();
  }
  countAnswers() {
    return this.questionsService.countAnswers();
  }

  clear() {
    this.totalPoints = 0;
    this.$results = of(null);
    this.questionsService.initQuestions();
    this.loadQuestion();
  }

  loadResultColumns(): Array<PoTableColumn> {
    console.log('loadResultColumns');
    return [
      { label: 'Certa', property: 'correct', type: 'boolean' },
      { label: 'Número', property: 'id', type: 'string' },
      { label: 'Questão', property: 'question', type: 'string' },
      { label: 'Resposta', property: 'answer', type: 'string' },
    ];
  }

}
