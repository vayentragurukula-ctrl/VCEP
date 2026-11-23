/** Source-grounded concise outcomes from VCEP approved student workbooks (Drive Edition 3.0).
 * These are display-only briefs. They do NOT replace the versioned official
 * assessment definitions, existing marks or historical submissions.
 */
export interface WorkbookOutcome {
  id: number;
  deliverable: string;
  mission: string;
  assessmentNote?: string;
}
export const WORKBOOK_OUTCOMES: readonly WorkbookOutcome[] = [
  {
    "id": 1,
    "deliverable": "Business process map, cash analysis and founder pitch deck",
    "mission": "Identify the customer problem, map the operating process, and defend a viable startup idea.",
    "assessmentNote": "Baseline A is an independent faculty-controlled assessment."
  },
  {
    "id": 2,
    "deliverable": "Professional profile and team charter",
    "mission": "Introduce yourself professionally; assign ownership, review responsibilities and escalation rules."
  },
  {
    "id": 3,
    "deliverable": "Workplace communication portfolio",
    "mission": "Write a clarification email, progress update and escalation without inventing payment information."
  },
  {
    "id": 4,
    "deliverable": "Meeting minutes and action tracker",
    "mission": "Run a structured meeting; record the decision, approver, action owners and deadlines."
  },
  {
    "id": 5,
    "deliverable": "Transaction register and journal",
    "mission": "Read the 12 Case A vouchers and prepare each debit and credit entry yourself."
  },
  {
    "id": 6,
    "deliverable": "Reviewed accounting close file",
    "mission": "Post Case A ledgers, correct the ₹35,000 error and prepare a closing trial balance."
  },
  {
    "id": 7,
    "deliverable": "Clean dataset and correction log",
    "mission": "Classify seven Case B raw receipts, quarantine exceptions and verify approved customer totals."
  },
  {
    "id": 8,
    "deliverable": "Bank reconciliation and exception report",
    "mission": "Reconcile Case C book and bank balances, journal required adjustments and explain the remaining differences."
  },
  {
    "id": 9,
    "deliverable": "Financial analysis and management findings",
    "mission": "Analyse Case D revenue, margins and receivables; report findings with one material uncertainty."
  },
  {
    "id": 10,
    "deliverable": "MIS dashboard and management memo",
    "mission": "Build a Case D dashboard with revenue, gross margin, operating margin and receivables."
  },
  {
    "id": 11,
    "deliverable": "Invoice review and reconciliation schedule",
    "mission": "Inspect Case E invoices against the supplied tax assumptions and flag purchase mismatches."
  },
  {
    "id": 12,
    "deliverable": "Ageing report and cash forecast",
    "mission": "Create a Case F receivables ageing table, prioritise collections and explain the cash gap."
  },
  {
    "id": 13,
    "deliverable": "AI-assisted work and prompt log",
    "mission": "Protect sensitive inputs, draft a suitable prompt and document checks of every AI claim."
  },
  {
    "id": 14,
    "deliverable": "Verified report and workflow test log",
    "mission": "Check four Case D AI-generated claims and design a controlled human-approved workflow."
  },
  {
    "id": 15,
    "deliverable": "CRM tracker and sales funnel analysis",
    "mission": "Update Case G leads, calculate conversion rates and draft two evidence-based follow-ups."
  },
  {
    "id": 16,
    "deliverable": "Pricing scenario model and decision memo",
    "mission": "Compare 25-seat base and 30-seat discount economics, test capacity and recommend a decision."
  },
  {
    "id": 17,
    "deliverable": "Discovery brief and problem statement",
    "mission": "Conduct structured capstone discovery, identify missing permissions and test key assumptions."
  },
  {
    "id": 18,
    "deliverable": "Project plan and acceptance tests",
    "mission": "Compare solutions, create a ten-day capstone plan and define five verifiable acceptance checks."
  },
  {
    "id": 19,
    "deliverable": "Working prototype and quality review",
    "mission": "Build capstone version 1, perform five quality tests and document a correction and handover."
  },
  {
    "id": 20,
    "deliverable": "Revised solution and change log",
    "mission": "Apply the approved Case F changes, recalculate the cash gap and retest the solution."
  },
  {
    "id": 21,
    "deliverable": "Resume and evidence-linked portfolio",
    "mission": "Write truthful, evidence-backed achievements and link six actual programme outputs."
  },
  {
    "id": 22,
    "deliverable": "Independent Exit B and interview feedback",
    "mission": "Complete the unseen assessment independently; afterwards defend one verified correction.",
    "assessmentNote": "No AI or peer help during Exit B or the individual interview."
  },
  {
    "id": 23,
    "deliverable": "Presentation and executive summary",
    "mission": "Create up to six presentation slides, run a live demonstration and defend your findings."
  },
  {
    "id": 24,
    "deliverable": "Reviewed portfolio and competency record",
    "mission": "Present the capstone, verify Passport evidence and prepare a specific 90-day plan."
  }
];

export function getWorkbookOutcome(session: number): WorkbookOutcome | undefined {
  return WORKBOOK_OUTCOMES.find((item) => item.id === session);
}
