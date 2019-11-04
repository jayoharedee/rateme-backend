import { Injectable, Body, Patch, NotFoundException } from '@nestjs/common';
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

  deleteFeedbackById(id: string): void {
    this.feedback = this.feedback.filter((feedback) => feedback.id !== id)
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

  getFeedbackById(id: string): Feedback {
    const found = this.feedback.find((feedback) => feedback.id === id)

    if (!found) {
      throw new NotFoundException(
        `Feedback with "${id}" not found.`
      )
    }

    return found
  }

  updateFeedbackStatus(@Body('id') id: string, status: FeedbackStatus): Feedback {
    const feedback = this.getFeedbackById(id)
    feedback.status = status
    return feedback
  }
}
