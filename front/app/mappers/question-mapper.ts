import { Indicator } from "../models/indicator";
import { Question } from "../models/question";

export function mapQuestion(question: any): Question {
    return {
        id: question.id,
        title: question.title,
        answer: question.answer,
        choices: question.choices.map((choice: any) => ({
            id: choice.id,
            text: choice.text,
            questionId: choice.questionId,
            indicatorCoefficients: choice.indicatorCoefficients.map((ic: any) => ({
                id: ic.id,
                coefficient: ic.coefficient,
                choiceId: ic.choiceId,
                indicator: ic.indicator as Indicator,
            })),
        })),
    };
}
