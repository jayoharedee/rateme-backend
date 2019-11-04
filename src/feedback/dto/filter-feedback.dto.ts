import { FeedbackStatus } from "../feedback.model";
import { IsOptional, IsNotEmpty, IsIn } from "class-validator";

export class FilterFeedbackDto {
  @IsOptional()
  @IsIn([
    FeedbackStatus.OPEN,
    FeedbackStatus.IN_PROGRESS,
    FeedbackStatus.DONE,
  ])
  status: FeedbackStatus;

  @IsOptional()
  @IsNotEmpty()
  search: string;
}