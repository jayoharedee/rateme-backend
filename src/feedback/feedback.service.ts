import { Injectable, Body, Patch, NotFoundException } from '@nestjs/common';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
// import { FilterFeedbackDto } from './dto/filter-feedback.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { FeedbackRepository } from './feedback.repository';
import { Feedback } from './feedback.entity';
import { FeedbackStatus } from './feedback-status.enum';

@Injectable()
export class FeedbackService {
  constructor(
    @InjectRepository(FeedbackRepository)
    private feedbackRepository: FeedbackRepository,
  ) {}
  // private feedback: Feedback[] = []


  async createFeedback(createFeedbackDto: CreateFeedbackDto): Promise<Feedback> {
    return this.feedbackRepository.createFeedback(createFeedbackDto);
  }

  async deleteFeedbackById(id: number): Promise<void> {
    const result = await this.feedbackRepository.delete(id)
    if (result.affected === 0) {
      throw new NotFoundException(
        `Feedback with "${id}" not found.`,
      )
    }
  }

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

  async updateFeedbackStatus(id: number, status: FeedbackStatus): Promise<Feedback> {
    const feedback = await this.getFeedbackById(id)
    feedback.status = status
    await feedback.save()
    return feedback
  }

  // updateFeedbackStatus(@Body('id') id: string, status: FeedbackStatus): Feedback {
  //   const feedback = this.getFeedbackById(id)
  //   feedback.status = status
  //   return feedback
  // }
}
