import { Injectable } from '@nestjs/common';
import { Feedback, FeedbackStatus } from './feedback.model';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import * as uuid from 'uuid/v1'

@Injectable()
export class FeedbackService {
  private feedback: Feedback[] = []

  createFeedback(createFeedbackDto: CreateFeedbackDto): Feedback {
    const { title, description } = createFeedbackDto

    const feedback: Feedback = {
      id: uuid(),
      title,
      description,
      status: FeedbackStatus.OPEN,
    }

    this.feedback.push(feedback)

    return feedback
  }

  getAllFeedback(): Feedback[] {
    return this.feedback
  }
}
