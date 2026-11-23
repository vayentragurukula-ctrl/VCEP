'use client';

export const SESSION_22_STORAGE_KEY = 'vcep:s22:hiring-simulation:state';

export interface InterviewEvidenceItem {
  id: string; // 'IE-01', 'IE-02', 'IE-03'
  prompt: 'A task I completed' | 'An error I corrected' | 'A decision I escalated';
  title: string;
  situation: string;
  personalTask: string;
  actionTaken: string;
  resultVerified: string;
  evidenceRef: string;
}

export interface DevelopmentMilestone {
  milestone: string;
  capabilityGap: string;
  practiceAction: string;
  reviewDate: string;
}

export interface VivaScenarioDefense {
  id: string;
  category: string;
  examinerQuestion: string;
  keyTechnicalConcept: string;
  candidateDefense: string;
}

export interface Session22State {
  interviewEvidence: InterviewEvidenceItem[];
  developmentPlan: DevelopmentMilestone[];
  clarificationQuestions: string[];
  strongestTaskReflection: string;
  ethicalResponse: string;
  interviewerFeedback: string;
  studentContribution: string;
  reviewerCorrection: string;
  governance: {
    preparerName: string;
    reviewerName: string;
    decisionOwner: string;
    auditStatus: string;
    fileVersion: string;
    interviewScore: number; // out of 10
  };
  checklist: boolean[];
  timestamp?: string;
}

export const INITIAL_INTERVIEW_EVIDENCE: InterviewEvidenceItem[] = [
  {
    id: 'IE-01',
    prompt: 'A task I completed',
    title: '',
    situation:
      '',
    personalTask:
      '',
    actionTaken:
      '',
    resultVerified:
      '',
    evidenceRef: '',
  },
  {
    id: 'IE-02',
    prompt: 'An error I corrected',
    title: '',
    situation:
      '',
    personalTask:
      '',
    actionTaken:
      '',
    resultVerified:
      '',
    evidenceRef: '',
  },
  {
    id: 'IE-03',
    prompt: 'A decision I escalated',
    title: '',
    situation:
      '',
    personalTask:
      '',
    actionTaken:
      '',
    resultVerified:
      '',
    evidenceRef: '',
  },
];

export const INITIAL_DEVELOPMENT_PLAN: DevelopmentMilestone[] = [
  {
    milestone: 'Milestone 1 (Day 1–10)',
    capabilityGap: '',
    practiceAction:
      '',
    reviewDate: '',
  },
  {
    milestone: 'Milestone 2 (Day 11–20)',
    capabilityGap: '',
    practiceAction:
      '',
    reviewDate: '',
  },
  {
    milestone: 'Milestone 3 (Day 21–30)',
    capabilityGap: '',
    practiceAction:
      '',
    reviewDate: '',
  },
];

export const CORE_VIVA_SCENARIOS: VivaScenarioDefense[] = [
  {
    id: 'V1',
    category: 'Accounting Principles & Ind AS',
    examinerQuestion: 'Why did you classify advance customer payments as liabilities rather than revenue?',
    keyTechnicalConcept: 'Ind AS 115 Revenue Recognition & Performance Obligations',
    candidateDefense:
      'Under Ind AS 115, cash received prior to delivery represents an unfulfilled performance obligation. Revenue can only be recognized upon satisfaction of delivery and customer acceptance. Until then, advance payments must remain classified as a current liability to prevent misleading revenue inflation.',
  },
  {
    id: 'V2',
    category: 'Bank Reconciliation & Timing Bridges',
    examinerQuestion: 'How did you reconcile the ₹4,000 variance between the bank statement and company cash book?',
    keyTechnicalConcept: 'Timing Bridge (Uncredited vs Unpresented Cheques)',
    candidateDefense:
      'The ₹4,000 variance is entirely due to timing differences: ₹6,000 in cheques deposited but not yet cleared by the bank, and ₹10,000 in issued cheques not yet presented for payment. Applying the timing bridge: ₹87,200 bank balance + ₹6,000 uncredited - ₹10,000 unpresented reconciles exactly to the ₹83,200 adjusted cash book balance with ₹0 unexplained variance.',
  },
  {
    id: 'V3',
    category: 'Sales Operations & Funnel Analytics',
    examinerQuestion: 'Why is it deceptive to report only the Closed-Lead Win Rate in sales operations?',
    keyTechnicalConcept: 'Denominator Transparency (All-Lead vs Closed-Lead)',
    candidateDefense:
      'Closed-Lead Win Rate (3 won ÷ 5 closed = 60.0%) measures closing efficiency on decided deals, but it excludes 3 open inquiries. Reporting 60% alone conceals stalled leads in the pipeline. The All-Lead Win Rate (3 won ÷ 8 total = 37.5%) provides full visibility into marketing acquisition reach and stalled deal volume.',
  },
  {
    id: 'V4',
    category: 'Commercial Unit Economics',
    examinerQuestion: 'Why does accepting 30 seats at a 10% discount produce zero incremental profit?',
    keyTechnicalConcept: 'Break-Even Shifts & Capacity Exhaustion',
    candidateDefense:
      'At standard price ₹10,000 and ₹4,000 variable cost, unit contribution is ₹6,000. At 25 seats, total contribution is ₹1,50,000, yielding ₹30,000 profit over ₹1,20,000 fixed costs. Discounting to ₹9,000 reduces unit contribution to ₹5,000. At 30 seats, total contribution remains ₹1,50,000, generating identical ₹30,000 profit (₹0 incremental gain) while exhausting 100% operational capacity with zero buffer.',
  },
  {
    id: 'V5',
    category: 'Professional Ethics & Governance',
    examinerQuestion: 'What would you do if an executive asked you to remove an unverified ₹5,000 suspense item to balance the books?',
    keyTechnicalConcept: 'Audit Integrity & Fraud Prevention (ICAI Code of Ethics)',
    candidateDefense:
      'I would respectfully refuse and retain the ₹5,000 in an isolated suspense account. Falsifying or concealing unverified items violates professional accounting ethics and internal control standards. I would document the dispute details and escalate through approved management channels until verified source vouchers are obtained.',
  },
];

export const INITIAL_CLARIFICATION_QUESTIONS = [
  'File Naming Standard: Official submission must be named StudentID_S22_v01.xlsx and submitted via faculty portal.',
  'Live Formula Mandate: All calculated figures require live Excel formulas; screenshot-only attempts receive 0 marks.',
  'Assessment Conditions: Exactly 60 minutes individual timed execution; zero AI assistance; zero peer collaboration.',
  'Viva Evaluation Basis: Assessed on mathematical precision, evidence grounding, and ethical firmness (not accent or fluency).',
];

export const DEFAULT_STRONGEST_TASK_REFLECTION =
  'My strongest independent accomplishment was engineering the Case F Version 2.0 working capital and change control model. When an approved ₹5,000 credit note was issued to Beacon Retail and an ₹8,000 supplier payment was deferred beyond Day 7, I proved mathematically that accounts receivable contracted to ₹95,000, the 7-day cash gap contracted to -₹12,000, and opening bank cash remained strictly invariant at ₹25,000. I re-executed all five regression tests in Excel with zero unexplained variance.';

export const DEFAULT_ETHICAL_RESPONSE =
  'If a manager instructed me to remove an unverified ₹5,000 suspense item or plug a discrepancy to close the books on Friday, I would firmly refuse. Under ICAI professional standards, writing off or concealing unreconciled balances without source vouchers constitutes fraudulent financial misstatement. I would maintain the ₹5,000 in an isolated suspense account, document the transaction dispute, and submit a formal audit escalation note to the Finance Director.';

export const DEFAULT_INTERVIEWER_FEEDBACK =
  'The candidate demonstrated exceptional technical reasoning and mathematical clarity during the viva voce. Formulas, ledger reconciliations, and timing bridges were explained with precision. The candidate firmly articulated the non-cash nature of credit notes and displayed uncompromising ethical resilience when challenged with the suspense plug scenario. Recommended for hiring as a Junior Financial Analyst.';

export const DEFAULT_STUDENT_CONTRIBUTION =
  'Completed the 60-minute unseen Exit B practical assessment independently under strict examination conditions. Structured three comprehensive STAR+V interview evidence cases covering receivables modeling, non-cash credit note correction, and ethical escalation. Formulated a 30-day post-assessment capability development plan.';

export const DEFAULT_REVIEWER_CORRECTION =
  'Before Interview Defect: Candidate initially struggled to explain the mathematical mechanism by which an ₹8,000 supplier deferral narrows the 7-day cash gap without reducing vendor liabilities. Peer Reviewer Correction: Interviewer challenged candidate to distinguish short-term cash flow timing from accrued balance sheet liabilities; candidate successfully demonstrated that total accounts payable remains unaltered while 7-day liquidity contracts by ₹8,000.';

export const INITIAL_CHECKLIST_LABELS = [
  'I completed the 60-minute unseen practical Exit B assessment independently under controlled conditions.',
  'I adhered strictly to the zero-AI and zero-peer collaboration rules during the assessment and interview.',
  'I submitted live spreadsheet formulas in StudentID_S22_v01.xlsx through the authorized faculty portal.',
  'I structured three STAR+V interview evidence cases (task completed, error corrected, decision escalated).',
  'I articulated the mathematical proof for invariant bank cash and 7-day liquidity deficit contraction.',
  'I defended professional accounting ethics and refused to plug unverified suspense discrepancies.',
  'I formulated a concrete 30-day post-assessment skill development plan across three structured milestones.',
  'I obtained formal human interviewer evaluation feedback and certified three-tier governance signoffs.',
];

export const S22_RUBRIC = [
  {
    name: 'Execution',
    points: 4,
    evidence: 'Complete and accurate required output: independent Exit B record, 3 STAR+V interview cases, and 30-day development plan.',
  },
  {
    name: 'Reasoning',
    points: 2,
    evidence: 'Explains calculation method, source references, non-cash accounting distinctions, and ethical escalation rationale.',
  },
  {
    name: 'Communication',
    points: 2,
    evidence: 'Professional executive vocabulary, structured STAR+V answers, mathematical clarity, and transparent self-appraisal.',
  },
  {
    name: 'Professional Process',
    points: 2,
    evidence: 'Strict compliance with controlled assessment rules (zero AI), distinct 3-tier governance signoffs, and deliverable versioning.',
  },
];

export const DEFAULT_SESSION_22_STATE: Session22State = {
  interviewEvidence: INITIAL_INTERVIEW_EVIDENCE,
  developmentPlan: INITIAL_DEVELOPMENT_PLAN,
  clarificationQuestions: INITIAL_CLARIFICATION_QUESTIONS,
  strongestTaskReflection: '',
  ethicalResponse: '',
  interviewerFeedback: '',
  studentContribution: '',
  reviewerCorrection: '',
  governance: {
    preparerName: 'Candidate (Financial Analyst Trainee)',
    reviewerName: 'Dr. Anita Roy (Faculty QA / Panel Lead)',
    decisionOwner: 'Prof. Rajesh Menon (Placement Director)',
    auditStatus: 'Pending Faculty Review',
    fileVersion: 'StudentID_S22_v01.docx',
    interviewScore: 0,
  },
  checklist: [false, false, false, false, false, false, false, false],
};

