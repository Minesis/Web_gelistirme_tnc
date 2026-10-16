from pathlib import Path
import json,joblib,pandas as pd
root=Path(__file__).resolve().parents[1]
path=root/'tests/model-fixtures.json'
rows=json.loads(path.read_text(encoding='utf-8'))
model=joblib.load(root/'model/emotion_model.joblib')
s=pd.Series([r['text'] for r in rows]).str.replace(r'\s+',' ',regex=True).str.strip()
x=pd.DataFrame({'text':s,'kelime_sayisi':s.str.split().str.len(),'karakter_sayisi':s.str.len()})
for r,label,scores in zip(rows,model.predict(x),model.decision_function(x)):
 r.update(expected=label,scores=scores.tolist())
path.write_text(json.dumps(rows,ensure_ascii=False,indent=2),encoding='utf-8')
