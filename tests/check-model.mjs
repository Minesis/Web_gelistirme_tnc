import fs from 'node:fs';
import assert from 'node:assert/strict';
import {createPredictor} from '../lib/emotion-engine.mjs';
import {monthlySummary,validDate} from '../lib/diary.mjs';
const model=JSON.parse(fs.readFileSync(new URL('../public/emotion-model.json',import.meta.url),'utf8'));
const predict=createPredictor(model);
const fixture=JSON.parse(fs.readFileSync(new URL('./model-fixtures.json',import.meta.url),'utf8'));
let error=0;
for(const row of fixture){const actual=predict(row.text);assert.equal(actual.emotion,row.expected,JSON.stringify(row.text));actual.scores.forEach((v,i)=>error=Math.max(error,Math.abs(v-row.scores[i])));}
assert.ok(error<1e-9,`Numeric mismatch: ${error}`);
const r=[{date:'2026-10-01',emotion:'Mutluluk',source:'model'},{date:'2026-10-02',emotion:'Üzüntü',source:'model'},{date:'2026-09-01',emotion:'Üzüntü',source:'model'},{date:'2026-10-03',emotion:'Öfke',source:'manual'}];
let summary=monthlySummary(r,'2026-10',model.classes);assert.equal(summary.entries.length,3);assert.equal(summary.analyzed.length,2);assert.equal(summary.counts.find(c=>c.name==='Mutluluk').count,1);
r[1].emotion='Mutluluk';assert.equal(monthlySummary(r,'2026-10',model.classes).counts.find(c=>c.name==='Mutluluk').count,2);
r.splice(0,1);assert.equal(monthlySummary(r,'2026-10',model.classes).analyzed.length,1);
assert.equal(monthlySummary(r,'2026-08',model.classes).analyzed.length,0);
assert.equal(validDate('2026-02-30'),false);assert.equal(validDate('2024-02-29'),true);
console.log(`${fixture.length} predictions match Python; max score difference ${error}. Monthly aggregation tests passed.`);
