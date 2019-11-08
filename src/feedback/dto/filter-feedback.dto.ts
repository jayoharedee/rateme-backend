import { FeedbackStatus } from '../feedback-status.enum';
import { IsOptional, IsNotEmpty, IsIn } from 'class-validator';

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
