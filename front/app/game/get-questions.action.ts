"use server";

import { Question } from "../models/question";

export async function getQuestions() : Promise<Question[]> {
    console.log(process.env.API_ROUTE_URL + 'questions')
    const res = await fetch(process.env.API_ROUTE_URL + 'questions', { cache: 'no-store' })
    const data = await res.json() as Question[]
    return data; 
}
