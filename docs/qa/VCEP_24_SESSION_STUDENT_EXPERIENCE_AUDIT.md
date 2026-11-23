# VCEP — 24-Session Student Experience & Curriculum Connection Audit

**Date:** 23 November 2026  
**Scope:** GitHub branch `chatgpt/24-session-focus-ux-20261123`  
**Curriculum source:** The 24 supplied `S01...`–`S24...` student DOCX workbooks, cross-checked with the Google Drive curriculum collection.  
**Evidence level:** Static GitHub inspection and source-workbook reading; full browser tests and hosted database/AI integration were **not** run by ChatGPT.

## What was actually verified

- `app/guided-learning/page.tsx` renders `Session01StartupJourney` through `Session24PassportJourney` on their matching session IDs (all 24).
- Every journey has 3–5 sequential `SXX-TXX` bordered task cards and at least one student-input control (all 24, source inspection).
- Every journey now uses a concise task-brief component; the original full instruction remains available in an expandable, keyboard-accessible section. The optional **Show complete context** control restores longer introductions.
- The official submission station is present, but complete **curriculum-specific evidence-to-grading mapping is not established for all 24**. Existing student work and official grades must not be edited automatically.
- In PR #4, prewritten worksheet-answer insertion was disabled. Verified Session 03 messages may copy only from student-authored task fields; Baseline A and Exit B are excluded.
- Sessions 05, 07, 10, 16, and 22 received additional blank-start, decision or review integrity changes. Previously saved local drafts remain untouched.

## Session-by-session connection and expected work

| Session | Approved work objective | Approved principal deliverable | Static code / improvement status |
|---|---|---|---|
| 01 | Founder opportunity, business process and baseline | Business process map and cash analysis | Protected Baseline A; founder pitch remains separate |
| 02 | Professional identity and teamwork | Professional profile and team charter | Wired; task UI accessible |
| 03 | Workplace communication | Clarification email, progress update, escalation | Wired; student-authored fields mapped in PR4 |
| 04 | Meetings and reporting | Minutes and action tracker | Wired; faculty evidence contract needs live check |
| 05 | Journal classification | Transaction register and journal | Improved: 12 journal rows start unclassified |
| 06 | Ledger and close | Reviewed accounting and close file | Wired; faculty evidence contract needs live check |
| 07 | Excel receipt cleaning | Clean dataset and correction log | Improved: learner classifies all 7 raw receipts |
| 08 | Bank reconciliation | Bank reconciliation and exception report | Wired; faculty evidence contract needs live check |
| 09 | Financial performance | Management findings and financial analysis | Wired; faculty evidence contract needs live check |
| 10 | MIS and dashboards | Dashboard and management memo | Improved: memo and KPI selection start blank |
| 11 | GST and invoice review | Invoice review and reconciliation schedule | Wired; current rules require specialist check |
| 12 | Receivables and working capital | Ageing report and cash forecast | Wired; faculty evidence contract needs live check |
| 13 | AI for commerce | Verified AI-assisted work and prompt log | Wired; AI policy needs classroom check |
| 14 | AI verification | Verified report and workflow test log | Wired; AI policy needs classroom check |
| 15 | Customer and sales | CRM tracker and sales funnel analysis | Wired; faculty evidence contract needs live check |
| 16 | Commercial decision | Scenario model and decision memo | Improved: students must choose and write decision |
| 17 | Industry discovery | Discovery brief and problem statement | Wired; faculty evidence contract needs live check |
| 18 | Solution design | Project plan and acceptance tests | Wired; faculty evidence contract needs live check |
| 19 | Project execution | Working prototype and quality review | Wired; faculty evidence contract needs live check |
| 20 | Management review | Revised solution and change log | Wired; faculty evidence contract needs live check |
| 21 | Resume and portfolio | Evidence-linked resume and portfolio | Wired; faculty evidence contract needs live check |
| 22 | Hiring and Exit B | Controlled exit assessment and interview feedback | Improved: no default interview PASS or preset answers |
| 23 | Corporate presentation | Presentation and executive summary | Wired; faculty evidence contract needs live check |
| 24 | Demo Day and passport | Reviewed portfolio and competency record | Wired; credentials must be faculty-verified |

## Important unverified and remaining work

1. **P0 before paid pilot:** Independently demonstrate actual evidence transfer for each activity type to official submissions, faculty review and saved grade. A generic quantitative form cannot replace a resume, meeting minutes, Excel file, AI verification report or presentation.
2. **P0 assessment security:** Keep Session 01 Baseline A and Session 22 Exit B independent, trainer-released and without student-side automatic answers or premature certification.
3. **P1 content:** Audit and correct remaining student workstations for precompleted worked examples, disconnected buttons, hardcoded outputs, misleading 'Verified' labels and calculation errors. Do not erase historical localStorage or database evidence.
4. **P1 curriculum source:** `tests/verify-drive-edition3.mjs` expects `app/guided-learning/drive-edition-3.json`, which is not committed on the inspected branch. Restore an authorised source manifest or amend tests against an authoritative versioned curriculum; do not pretend it passed.
5. **P1 integration:** Run `pnpm exec tsc --noEmit`, `pnpm test`, `pnpm build`, and real browser tests with a fresh cohort in a disposable database. Audit mobile layouts and accessibility of each session.
6. **P1 later:** Verify live Vivi-provider credentials, Cloudflare D1/R2 staging deployment, uploads, permissions, consent and backups before a hosted pilot.

## Current release recommendation

**Static wiring: PASS (24/24).**  
**Minimal task-brief presentation: implemented (24/24), runtime not verified.**  
**Hands-on activities: present (24/24), educational completeness NOT VERIFIED.**  
**End-to-end assessment correctness: NOT VERIFIED for all 24.**  
**Production/paid college pilot: NO-GO pending P0 integration and controlled-assessment acceptance.**
