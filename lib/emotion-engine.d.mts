import type {Emotion} from '../Interfaces/EmotionRecord';
export interface Prediction {emotion:Emotion;scores:number[];knownFeatures:number;modelVersion:string}
export function normalizeText(text:string):string;
export function createPredictor(model:any):(text:string)=>Prediction;
