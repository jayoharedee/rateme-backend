export interface Feedback {
  id: string;
  description: string;
  title: string;
  status: FeedbackStatus;
}

export enum FeedbackStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE'
}
