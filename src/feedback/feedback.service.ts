import { Injectable } from '@nestjs/common';
import { Feedback, FeedbackStatus } from './feedback.model';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import * as uuid from 'uuid/v1'
import { FilterFeedbackDto } from './dto/filter-feedback.dto';

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

  getFeedbackWithFilters(filterDto: FilterFeedbackDto): Feedback[] {
    const { status, search } = filterDto
    let feedback = this.getAllFeedback()

    if (status) {
      feedback = feedback.filter((feedback) => feedback.status === status)
    }

    if (search) {
      feedback = feedback.filter((feedback) => 
        feedback.title.includes(search) ||
        feedback.description.includes(search)
      )
    }

    return feedback
  }
}
