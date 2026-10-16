export const emotions = ['Mutluluk','Üzüntü','Öfke','Korku','Nötr','Utanç'] as const;
export type Emotion = typeof emotions[number];
export interface EmotionRecord { id:string; text:string; emotion:Emotion; date:string; createdAt:string; updatedAt:string; modelVersion?:string; source:'model'|'manual'; }
