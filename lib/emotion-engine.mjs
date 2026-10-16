// Exact inference for the uploaded scikit-learn char_wb TF-IDF + LinearSVC pipeline.
// Python counts Unicode code points (not UTF-16 units); whitespace matches Python \s.
const pythonWhitespace = /[\u0009-\u000d\u001c-\u0020\u0085\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000]+/gu;
export function normalizeText(text) { return text.replace(pythonWhitespace,' ').replace(/^ +| +$/g,''); }
export function createPredictor(model) {
 if(model.version!==1 || model.coef.length!==model.classes.length) throw new Error('Model biçimi desteklenmiyor.');
 const vocabulary=new Map(model.terms.map((term,i)=>[term,i]));
 return function predict(rawText) {
  const text=normalizeText(rawText), words=text.toLowerCase().split(' ').filter(Boolean), counts=new Map();
  for(const word of words){const padded=Array.from(' '+word+' ');
   for(let n=model.ngramRange[0];n<=model.ngramRange[1];n++){
    let offset=0;
    const add=(s)=>{const index=vocabulary.get(s);if(index!==undefined)counts.set(index,(counts.get(index)||0)+1)};
    add(padded.slice(0,n).join(''));
    while(offset+n<padded.length){offset++;add(padded.slice(offset,offset+n).join(''));}
    if(offset===0)break;
   }
  }
  const vector=[];let squareSum=0;
  for(const [i,count] of counts){const value=(1+Math.log(count))*model.idf[i];vector.push([i,value]);squareSum+=value*value;}
  const norm=Math.sqrt(squareSum)||1;
  const lengths=[text?text.split(' ').length:0,Array.from(text).length];
  const scores=model.classes.map((_,k)=>{
   let score=model.intercept[k];
   for(const [i,value] of vector)score+=model.coef[k][i]*value/norm;
   for(let j=0;j<lengths.length;j++)score+=model.coef[k][model.terms.length+j]*lengths[j]/model.lengthScale[j];
   return score;
  });
  let best=0;for(let k=1;k<scores.length;k++)if(scores[k]>scores[best])best=k;
  return {emotion:model.classes[best],scores,knownFeatures:counts.size,modelVersion:model.sha256};
 };
}
