/**
 * Non-destructive static regression for the 24-session task-first experience.
 * Run: node tests/verify-24-session-task-first.mjs
 * Does not require accounts, API access, or a database.
 */
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const slugs = [
  '01-startup', '02-teamwork', '03-communication', '04-meeting',
  '05-accounting', '06-ledger', '07-cleaning', '08-reconciliation',
  '09-performance', '10-dashboard', '11-gst', '12-receivables',
  '13-ai', '14-ai', '15-sales', '16-decision',
  '17-discovery', '18-planning', '19-execution', '20-change',
  '21-portfolio', '22-hiring', '23-presentation', '24-passport',
];
const page = readFileSync('app/guided-learning/page.tsx', 'utf8');
const brief = readFileSync('app/guided-learning/components/session-workbook-outcomes.ts', 'utf8');
const compact = readFileSync('app/guided-learning/components/focused-task-instruction.tsx', 'utf8');

assert.match(compact, /<details/, 'Full instructions must remain accessible');
assert.match(compact, /Read complete task instructions/, 'Details must be labelled');
assert.match(page, /getWorkbookOutcome\(selected\)/, 'Approved deliverables must appear in the session workspace');
assert.match(page, /<OfficialSubmissionStation/, 'Existing official submission must remain connected');

for (let i = 1; i <= 24; i++) {
  assert.match(brief, new RegExp('"id": ' + i + '(?:,|\\n)'), 's'), 'Missing source-grounded deliverable for S' + i);
}
for (const [i, slug] of slugs.entries()) {
  const num = String(i + 1).padStart(2, '0');
  const path = 'app/guided-learning/components/session-' + slug + '-journey.tsx';
  const source = readFileSync(path, 'utf8');
  assert.match(source, /import \{ FocusedTaskInstruction \}/, num + ': compact instructions missing');
  assert.match(source, /<FocusedTaskInstruction instruction=\{instruction\} \/>/, num + ': expandable instruction not used');
  const tasks = [...source.matchAll(new RegExp('taskId="S' + num + '-T\\d\\d"', 'g'))];
  assert.ok(tasks.length >= 3 && tasks.length <= 5, 'S' + num + ': expected 3–5 distinct task cards');
  assert.ok(source.includes('onUpdateDraft') || i + 1 === 22, num + ': draft integration missing');
  assert.match(page, new RegExp('selected === ' + (i + 1) + ' && <Session'), 'Session ' + num + ' not rendered');
}

const accounting = readFileSync('app/guided-learning/components/session-05-accounting-data.ts', 'utf8');
assert.match(accounting, /rows: STUDENT_JOURNAL_ROWS/, 'Accounting must begin with student journal blanks');
assert.match(accounting, /debitAccount: ''/, 'Debit accounts must not be preselected');
assert.match(accounting, /creditAccount: ''/, 'Credit accounts must not be preselected');
const cleaning = readFileSync('app/guided-learning/components/session-07-cleaning-data.ts', 'utf8');
assert.match(cleaning, /decisions: \{\}/, 'Receipt decisions should start blank');
assert.match(cleaning, /cleanRows: \[\]/, 'Clean receipt table should start blank');
assert.match(cleaning, /exceptions: \[\]/, 'Exception table should start blank');
const classifier = readFileSync('app/guided-learning/components/session-07-cleaning-journey.tsx', 'utf8');
assert.match(classifier, /s07-student-classification/, 'Receipt classification must be interactive');
assert.match(classifier, /classifyReceipt/, 'Receipt decisions must update the persisted student state');
assert.doesNotMatch(classifier, /\{row\.flag\}/, 'Raw receipt table must not reveal preclassified answer labels');
const commercial = readFileSync('app/guided-learning/components/session-16-decision-data.ts', 'utf8');
assert.match(commercial, /decisionMemo: ''/, 'Students must write their own decision memo');
assert.match(commercial, /enteredMinSeats: ''/, 'Students must calculate discounted minimum demand');

console.log('PASS: All 24 task-first journeys, curriculum deliverables, and new-student hands-on defaults.');
