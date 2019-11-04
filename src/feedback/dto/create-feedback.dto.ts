import { IsNotEmpty } from 'class-validator';
export class CreateFeedbackDto {
  title: string;

  @IsNotEmpty()
  description: string;
}
