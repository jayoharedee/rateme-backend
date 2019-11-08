import { Injectable, Body, Patch, NotFoundException } from '@nestjs/common';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { FilterFeedbackDto } from './dto/filter-feedback.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { FeedbackRepository } from './feedback.repository';
import { Feedback } from './feedback.entity';

@Injectable()
export class FeedbackService {
  constructor(
    @InjectRepository(FeedbackRepository)
    private feedbackRepository: FeedbackRepository,
  ) {}
  // private feedback: Feedback[] = []

  // createFeedback(createFeedbackDto: CreateFeedbackDto): Feedback {
  //   const { title, description } = createFeedbackDto

  //   const feedback: Feedback = {
  //     id: uuid(),
  //     title,
  //     description,
  //     status: FeedbackStatus.OPEN,
  //   }

  //   this.feedback.push(feedback)

  //   return feedback
  // }

  // deleteFeedbackById(id: string): void {
  //   const found = this.getFeedbackById(id)
  //   this.feedback = this.feedback.filter((feedback) => feedback.id !== found.id)
  // }

  // getAllFeedback(): Feedback[] {
  //   return this.feedback
  // }

  // getFeedbackWithFilters(filterDto: FilterFeedbackDto): Feedback[] {
  //   const { status, search } = filterDto
  //   let feedback = this.getAllFeedback()

  //   if (status) {
  //     feedback = feedback.filter((feedback) => feedback.status === status)
  //   }

  //   if (search) {
  //     feedback = feedback.filter((feedback) =>
  //       feedback.title.includes(search) ||
  //       feedback.description.includes(search)
  //     )
  //   }

  //   return feedback
  // }

  async getFeedbackById(id: number): Promise<Feedback> {
    const found = await this.feedbackRepository.findOne(id)

    if (!found) {
      throw new NotFoundException(
        `Feedback with "${id}" not found.`,
      )
    }

    return found

  }
  // getFeedbackById(id: string): Feedback {
  //   const found = this.feedback.find((feedback) => feedback.id === id)

  //   if (!found) {
  //     throw new NotFoundException(
  //       `Feedback with "${id}" not found.`
  //     )
  //   }

  //   return found
  // }

  // updateFeedbackStatus(@Body('id') id: string, status: FeedbackStatus): Feedback {
  //   const feedback = this.getFeedbackById(id)
  //   feedback.status = status
  //   return feedback
  // }
}
