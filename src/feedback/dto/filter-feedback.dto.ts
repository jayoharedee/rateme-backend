import { FeedbackStatus } from "../feedback.model";

export class FilterFeedbackDto {
  status: FeedbackStatus;
  search: string;
}