import { AnswerModel } from './answer';

export interface QuestionModel {
    id: string;
    question: string;
    topic: string;
    answers: AnswerModel[];
}