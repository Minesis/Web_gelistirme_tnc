import { Emotion } from '../Interfaces/EmotionRecord';
export const colors: Record<Emotion,string> = {Mutluluk:'#b8ef79',Üzüntü:'#9dc7ff',Öfke:'#ffad9e',Korku:'#c5b3f3',Nötr:'#d6d9de',Utanç:'#f0b4d3'};
export default function EmotionBadge({emotion}:{emotion:Emotion}) {return <span className="badge" style={{background:colors[emotion]+'22',color:colors[emotion]}}><i style={{background:colors[emotion]}}/>{emotion}</span>}
