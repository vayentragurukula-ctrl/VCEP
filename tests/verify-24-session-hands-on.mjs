/**
 * Source-only audit of 24 Guided Learning workstations.
 * Run from repository root: node tests/verify-24-session-hands-on.mjs
 * Does not read private curriculum or modify student records.
 */
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const names = [
  'startup','teamwork','communication','meeting','accounting','ledger',
  'cleaning','reconciliation','performance','dashboard','gst','receivables',
  'ai','ai','sales','decision','discovery','planning',
  'execution','change','portfolio','hiring','presentation','passport',
];
const page = readFileSync('app/guided-learning/page.tsx','utf8');
const shared = readFileSync('app/guided-learning/components/task-instruction.tsx','utf8');
const css = readFileSync('app/guided-learning/guided-learning.css','utf8');
assert.match(shared, /<details className="vcep-task-more">/, 'Full instructions must stay available to students');
assert.match(css, /vcep-task-instruction/, 'Task instruction CSS must exist');

let totalTasks = 0;
for(let n=1;n<=24;n++){
  const id=String(n).padStart(2,'0');
  const source=readFileSync(`app/guided-learning/components/session-${id}-${names[n-1]}-journey.tsx`,'utf8');
  const taskIds=[...source.matchAll(/taskId=["'](S\d{2}-T\d{2})["']/g)].map(m=>m[1]);
  assert.ok(taskIds.length>=3 && taskIds.length<=5, `S${id}: expected 3-5 numbered tasks`);
  assert.deepEqual(taskIds,taskIds.map((_,i)=>`S${id}-T${String(i+1).padStart(2,'0')}`),`S${id}: task IDs must be sequential`);
  assert.match(source,/import \{ TaskInstruction \} from '\.\/task-instruction'/,`S${id}: common concise instruction component missing`);
  assert.match(source,/<TaskInstruction text=\{instruction\} \/>/,`S${id}: complete source instruction must remain available`);
  assert.ok(/<textarea|<input|<select/.test(source),`S${id}: expected real student input`);
  assert.ok(page.includes(`selected === ${n} && <Session`),`S${id}: guided page wiring missing`);
  totalTasks+=taskIds.length;
}
assert.equal(totalTasks,95,'Expected 95 uniquely named task cards across all 24 sessions');

const defaults={
  1:'session-01-startup-data.ts',
  5:'session-05-accounting-data.ts',
  7:'session-07-cleaning-data.ts',
  8:'session-08-reconciliation-data.ts',
  16:'session-16-decision-data.ts',
  21:'session-21-portfolio-data.ts',
  22:'session-22-hiring-data.ts',
  24:'session-24-passport-data.ts',
};
const data=(num)=>readFileSync('app/guided-learning/components/'+defaults[num],'utf8');
assert.match(data(1),/speakerNotes: '' \}\)\)/,'S01: new pitch must start blank');
assert.match(data(5),/rows: INITIAL_JOURNAL_ROWS\.map\(/,'S05: accounting entries must require student work');
assert.match(data(7),/cleanRows: \[\],[\s\S]*?exceptions: \[\],/,'S07: clean and exception worksheets must start empty');
assert.match(data(8),/checkedIndices: \[\]/,'S08: student must complete checks');
assert.match(data(16),/decisionMemo: ''/,'S16: student must write commercial decision');
assert.match(data(21),/status: 'Practice Candidate'/,'S21: unverified student evidence must not be certified');
assert.match(data(22),/auditStatus: 'Awaiting official faculty assessment'/,'S22: no pre-issued exit score');
assert.doesNotMatch(data(22), /candidateDefense/, 'S22: model interview answers must not be bundled for students');
const s22View = readFileSync('app/guided-learning/components/session-22-hiring-journey.tsx','utf8');
assert.doesNotMatch(s22View, /active\.candidateDefense/, 'S22: interview answers must not render on the learner page');
assert.match(data(24),/humanAcknowledged: false/,'S24: no pre-certified Industry Passport');
console.log('PASS: 24 connected workstations, 95 numbered task cards, concise/full instructions and critical ungraded defaults.');
console.log('NOTE: This structural audit does not certify runtime behavior, private curriculum accuracy or official assessment results.');
