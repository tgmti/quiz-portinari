import { Component, OnInit } from '@angular/core';
import { PoRadioGroupOption } from '@portinari/portinari-ui';
import { QuestionModel } from 'src/app/models/questions';
import { QuestionsService } from 'src/app/services/questions.service';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AnswerModel } from 'src/app/models/answer';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  $question: Observable<QuestionModel>;
  $answers: Observable<AnswerModel[]>;

  selectAnswers: PoRadioGroupOption[] = [];

  selectedAnswer = '';

  constructor(private questionsService: QuestionsService) {
  }

  ngOnInit() {
    this.loadQuestion();
  }

  loadQuestion() {
    this.$question = this.questionsService.getNextQuestion();
    this.$answers = this.questionsService.getAnswers().pipe(
      tap(answers => this.selectAnswers = answers.map(q => ({ value: q.id, label: q.id })))
    );
  }

  save(answer) {
    this.questionsService.saveAnswer(this.selectedAnswer);
    this.selectedAnswer = '';
    this.loadQuestion();
  }

  results() {
    console.log('Results');
  }

}
