# VCEP | 24-session hands-on learning audit
**Date:** 23 November 2026  
**Branch:** `chatgpt/24-session-minimal-hands-on-20261123`  
**Base:** `chatgpt/pilot-safety-after-safe-sync-20261123` (draft PR #4).

## What has been verified from source code
- `app/guided-learning/page.tsx` renders all 24 `SessionXX...Journey` components.
- Every component has distinct bordered `SXX-TYY` task identifiers: 95 cards total.
- All 24 modules expose input controls and support the shared concise task directions.
- New `TaskInstruction` displays an actionable brief and retains the complete original text in a native accessible `details` element.
- Original task controls and source evidence are preserved. No task/assessment records were deleted.
- New-attempt defaults in the main workstations were corrected where students were incorrectly shown prefilled answers, approvals, fabricated portfolio achievements or a perfect score.
- The previous consolidated PR #4 disables canned official answer submission and unsafe test cleanup.

## Session-by-session professional evidence goal
These are the intended practice artifacts. **They are not a claim of complete independent curriculum validation.**

| ID | Hands-on task | Required student evidence |
|---|---|---|
| 01 | Startup founder lab | Original opportunity assessment and editable 8-slide pitch |
| 02 | Team collaboration | Introduction, role allocation, team charter and decision |
| 03 | Workplace communication | Clarification email, progress update, escalation |
| 04 | Meeting operations | Agenda, decisions, minutes, accountable follow-ups |
| 05 | Accounting events | 12 journal entries from approved vouchers, evidence |
| 06 | Month-end close | Ledger corrections, trial balance and close reasoning |
| 07 | Excel data cleaning | Raw-preserving clean table, 4 exception IDs, formulas |
| 08 | Bank reconciliation | Classified differences, journal entries and BRS |
| 09 | Finance performance | Student-calculated KPIs and management briefing |
| 10 | MIS dashboard | Recalculating dashboard and own management memo |
| 11 | Invoice and GST review | Invoice check evidence and documented exceptions |
| 12 | Receivables | Aged accounts and original collections communication |
| 13 | Responsible AI | Bounded prompt, verified output and disclosure record |
| 14 | AI claim audit | Independent corrections and governance decision |
| 15 | Sales operations | CRM next actions, rates and original follow-ups |
| 16 | Commercial decisions | Price/break-even scenario and decision memo |
| 17 | Industry discovery | Evidence-backed problem statement and questions |
| 18 | Project planning | Solution selection, WBS, risks and signoff |
| 19 | Project QA | Acceptance evidence, corrections and handover |
| 20 | Change management | Version decision, regression proof and review |
| 21 | Resume and portfolio | Student-written achievements and verifiable artifacts |
| 22 | Independent assessment/interview | Protected Exit B, actual interview evidence; **no preissued score** |
| 23 | Presentation studio | Original slides, speaker script and rehearsal |
| 24 | Demo day / Industry Passport | Personal artifact defence and **faculty-issued** credentials only |

## Outstanding blockers (do not mark production ready)

1. **Private curriculum build input.** The server-only `lib/guided-content.server.ts` imports `app/guided-learning/drive-edition-3.json`, while `.gitignore` excludes `app/guided-learning/drive-edition-3*.json` and `curriculum/archive/`. A clean GitHub checkout cannot guarantee a successful build. Provide the approved curriculum through a secure, authorised build-time process—do **not** commit restricted assessment keys or proprietary training material to the public repository.
2. **Academic reconciliation.** The old `lib/sessions.json` official worksheet contains legacy cases and is not universally consistent with the Drive student workbooks. Review each official submission prompt, rubric and answer format before enabling automatic field sync.
3. **Student evidence ownership.** New empty states alone do not prove faculty grading of actual uploaded artifacts. Test live student/faculty loops for every distinct workstation, not merely browser page rendering.
4. **Existing localStorage.** Default changes apply to new attempts. Previously saved states can still include prefilled examples or fictional approvals. Do not wipe existing localStorage or overwrite historical student records. Build an explicit versioned legacy-state reconciliation strategy with consent if required.
5. **Assessment security.** Session 01 Baseline A and Session 22 Exit B remain faculty-controlled. Audit client-side answer snippets, protected API responses and Vivi restrictions before a live cohort.
6. **Infrastructure.** Cloud D1, R2, secrets, authenticated hosted pilot and test isolation remain separate acceptance gates.
7. **Testing.** GitHub connector edits have not run TypeScript compilation, browser E2E, desktop/mobile visual QA, or full rubric validation. Structural tests and source readback are not runtime proof.

## Required acceptance run
- In Antigravity, synchronize this draft branch in a throwaway checkout; do **not** discard local work.
- Ensure private curriculum build inputs are available **locally and securely**.
- Run `pnpm exec tsc --noEmit`, `pnpm test`, `pnpm build` and session-specific tests.
- Exercise one new blank student for each of 24 sessions and check **no answers or marks are already earned**.
- For a fresh disposable local database, test save → reload → upload → submit → faculty review → student feedback.
- Verify 390px, 768px and 1440px screens and keyboard navigation.
- Record PASS/FAIL/NOT VERIFIED per session. Do not merge to release until critical failures are addressed.

## Verdict
**24/24 routes wired and 95 numbered practical task cards present in source.**
**UI simplification implemented on review branch, and multiple prefilled-response defects corrected.**
**Not yet certified: complete curriculum accuracy, all 24 end-to-end grading flows, build, hosted pilot or production.**
