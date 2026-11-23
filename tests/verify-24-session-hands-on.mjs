/**
 * VCEP hands-on wiring and student-independence regression.
 * Static assertions: these are NOT a substitute for browser + student tests.
 * Run from repo root: node tests/verify-24-session-hands-on.mjs
 */
import assert from 'node:assert/strict';
import fs from 'node:fs';

const page=fs.readFileSync('app/guided-learning/page.tsx','utf8');
const sessions=[
'01-startup','02-teamwork','03-communication','04-meeting','05-accounting','06-ledger',
'07-cleaning','08-reconciliation','09-performance','10-dashboard','11-gst','12-receivables',
'13-ai','14-ai','15-sales','16-decision','17-discovery','18-planning',
'19-execution','20-change','21-portfolio','22-hiring','23-presentation','24-passport'
];
let taskCount=0;
for(let i=0;i<sessions.length;i++){
  const session=i+1;
  const n=String(session).padStart(2,'0');
  const [_,name]=sessions[i].split(/-(.+)/);
  const path=`app/guided-learning/components/session-${sessions[i]}-journey.tsx`;
  const source=fs.readFileSync(path,'utf8');
  assert.match(page,new RegExp(`selected === ${session} && <Session${n}`),`Session ${n} must be connected`);
  assert.match(source,/ConciseTaskInstruction instruction=\{instruction\}/,`Session ${n}: concise, expandable task brief`);
  assert.match(source,/onUpdateDraft/, `Session ${n}: student evidence draft callback`);
  assert.match(source,/border: '1px solid #DCE5E9'/,`Session ${n}: premium task border`);
  const ids=[...source.matchAll(/taskId="(S\d\d-T\d\d)"/g)].map(x=>x[1]);
  assert.ok(ids.length>=3 && ids.length<=5,`Session ${n}: expected 3–5 meaningful tasks`);
  for(let j=0;j<ids.length;j++){
    assert.equal(ids[j],`S${n}-T${String(j+1).padStart(2,'0')}`,`Session ${n}: task IDs must be sequential`);
  }
  assert.ok(/<textarea\b|<input\b|<select\b/.test(source),`Session ${n}: actual learner input required`);
  taskCount+=ids.length;
}
assert.equal(sessions.length,24);
const station=fs.readFileSync('app/guided-learning/components/official-submission-station.tsx','utf8');
assert.doesNotMatch(station,/updateIfEmpty\('b0r0c1', 'INR/,'No canned calculations allowed');
assert.match(station,/draftAnswers\[workKey\]/,'Only student-authored answers can be copied');
const s05=fs.readFileSync('app/guided-learning/components/session-05-accounting-data.ts','utf8');
const rows=s05.slice(s05.indexOf('export const INITIAL_JOURNAL_ROWS'),s05.indexOf('];',s05.indexOf('export const INITIAL_JOURNAL_ROWS')));
assert.equal((rows.match(/debitAccount: ''/g)||[]).length,12,'Session 05 journal must start unclassified');
assert.equal((rows.match(/creditAccount: ''/g)||[]).length,12,'Session 05 credit accounts must start blank');
const s07=fs.readFileSync('app/guided-learning/components/session-07-cleaning-data.ts','utf8');
const s07State=s07.slice(s07.indexOf('export const INITIAL_S07_STATE'),s07.indexOf('export const S07_RUBRIC'));
assert.match(s07State,/cleanRows: \[\]/,'Session 07 clean table must start empty');
assert.match(s07State,/exceptions: \[\]/,'Session 07 exception table must start empty');
const s07Ui=fs.readFileSync('app/guided-learning/components/session-07-cleaning-journey.tsx','utf8');
assert.match(s07Ui,/classifyReceipt\(row, 'clean'\)/,'Approve button must classify receipts');
assert.match(s07Ui,/classifyReceipt\(row, 'exception'\)/,'Hold button must quarantine receipts');
for (const [path,field] of [
  ['app/guided-learning/components/session-10-dashboard-data.ts',"memoText: ''"],
  ['app/guided-learning/components/session-16-decision-data.ts',"decisionMemo: ''"],
  ['app/guided-learning/components/session-22-hiring-data.ts',"interviewScore: 0"]
]){
  assert.ok(fs.readFileSync(path,'utf8').includes(field),path+' must not precomplete student answers');
}
console.log(`PASS: 24 connected sessions with ${taskCount} ordered task cards, inputs and concise briefs; key student-work defaults protected.`);
