import { Component, OnInit } from '@angular/core';
import { PoRadioGroupOption } from '@portinari/portinari-ui';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  topic = 'Inteligência Artificial';
  question = 'A arquitetura de um agente determina, dentre outras características, a forma como os agentes se comunicam entre si e desempenham suas funções. Sobre as diversas arquiteturas dos agentes, marque a alternativa CORRETA:';

  answers = [
    { id: 'A', text: 'Nos casos em que os agentes possuem facilitadores (representantes), os gerentes da arquitetura escravo-mestre se comunicam com esses facilitadores e não com os agentes subordinados.' },
    { id: 'B', text: 'Dentre os diversos tipos de arquitetura, não há nenhum que contenha apenas um agente;'},
    { id: 'C', text: 'Na arquitetura de troca de mensagens os agentes podem se comunicar diretamente, porém devem utilizar protocolos específicos para essa finalidade.'},
    { id: 'D', text: 'A arquitetura de mecanismos de mercado é um dos exemplos de classificação baseada na forma pela qual os agentes cooperam entre si.'},
    { id: 'E', text: 'A arquitetura do quadro-negro, uma das arquiteturas focadas na cooperação, é caracterizada pela intensa comunicação direta que ocorre entre os agentes.'},
  ];

  selectAnswers: PoRadioGroupOption[] = this.answers.map(q => ({ value: q.id, label: q.id }));

  selectedAnswer = '';

  constructor() { }

  ngOnInit() {
  }

  save(opt) {
    console.log('save ', this.selectedAnswer);
  }

}
