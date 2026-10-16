import type {Emotion,EmotionRecord} from '../Interfaces/EmotionRecord';
export function localDate(date?:Date):string;
export function validDate(s:string):boolean;
export function monthlySummary(records:EmotionRecord[],month:string,emotions:readonly Emotion[]):{entries:EmotionRecord[];analyzed:EmotionRecord[];counts:{name:Emotion;count:number}[];days:number};
