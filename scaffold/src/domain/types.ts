export type StageName = 'learn' | 'practice' | 'build' | 'review' | 'prove';

export type CellState = 'locked' | 'available' | 'active' | 'done' | 'verified';

export interface StageProgress {
  stage: StageName;
  state: CellState;
  progress?: number; // 0 to 100 for active
  detail?: string;
}

export interface Capability {
  id: string;
  index: string;
  title: string;
  summary: string;
  stages: StageProgress[];
  statusText?: string;
  nextLessonId?: string;
}

export interface LessonSummary {
  id: string;
  title: string;
  kind: 'concept' | 'micro' | 'video' | 'practice' | 'checkpoint';
  durationMin: number;
  state: CellState;
}

export interface LessonGroup {
  id: string;
  title: string;
  doneCount: number;
  totalCount: number;
  lessons: LessonSummary[];
}

export interface CourseOutline {
  courseId: string;
  title: string;
  subtitle?: string;
  groups: LessonGroup[];
}

export interface PracticeTask {
  id: string;
  title: string;
  prompt: string;
  language: string;
  starter: string;
  checks: { id: string; label: string }[];
  hintsAvailable: number;
}

export interface PracticeResult {
  checks: { id: string; status: 'pass' | 'fail' | 'stale'; message?: string }[];
  output?: string;
  error?: string;
  allPassed: boolean;
}

export interface ProjectEvidence {
  id: string;
  reference: string;
  title: string;
  summary: string;
  stage: StageName;
  skills: { id: string; label: string }[];
  artifacts: { kind: string; label: string; href?: string }[];
  verifiedAt?: string;
  reviewerName?: string;
}

export interface SkillVerificationRecord {
  id: string;
  skillId: string;
  skillLabel: string;
  level: number;
  levels: number;
  levelLabel: string;
  method: string;
  issuer: string;
  credentialId?: string;
  issuedAt?: string;
  status: 'verified' | 'pending' | 'expired';
  evidenceCount: number;
  shareUrl?: string;
}
