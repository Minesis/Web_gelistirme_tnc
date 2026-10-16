import joblib,json,hashlib
from pathlib import Path
import numpy as np,pandas as pd
ROOT=Path(__file__).resolve().parents[1]
source=ROOT/'model/emotion_model.joblib'
m=joblib.load(source)
v=m.steps[0][1].named_transformers_['metin']; scaler=m.steps[0][1].named_transformers_['uzunluk']; clf=m.steps[1][1]
assert v.analyzer=='char_wb' and v.ngram_range==(3,5) and v.norm=='l2' and v.sublinear_tf and v.lowercase and v.strip_accents is None
terms=['']*len(v.vocabulary_)
for term,i in v.vocabulary_.items():terms[i]=term
obj={'version':1,'name':'Karakter TF-IDF + Linear SVM','sha256':hashlib.sha256(source.read_bytes()).hexdigest(),'classes':clf.classes_.tolist(),'terms':terms,'idf':v.idf_.tolist(),'coef':clf.coef_.tolist(),'intercept':clf.intercept_.tolist(),'lengthScale':scaler.scale_.tolist(),'ngramRange':list(v.ngram_range)}
root=ROOT
(root/'public/emotion-model.json').write_text(json.dumps(obj,ensure_ascii=False,separators=(',',':')),encoding='utf8')
