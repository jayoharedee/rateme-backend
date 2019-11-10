import { Injectable, Body, Patch, NotFoundException } from '@nestjs/common';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
// import { FilterFeedbackDto } from './dto/filter-feedback.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { FeedbackRepository } from './feedback.repository';
import { Feedback } from './feedback.entity';
import { FeedbackStatus } from './feedback-status.enum';
import { FilterFeedbackDto } from './dto/filter-feedback.dto';

@Injectable()
export class FeedbackService {
  constructor(
    @InjectRepository(FeedbackRepository)
    private feedbackRepository: FeedbackRepository,
  ) {}


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

  async getAllFeedback(filterDto: FilterFeedbackDto): Promise<Feedback[]> {
    return this.feedbackRepository.getTasks(filterDto)
  }


  async getFeedbackById(id: number): Promise<Feedback> {
    const found = await this.feedbackRepository.findOne(id)

    if (!found) {
      throw new NotFoundException(
        `Feedback with "${id}" not found.`,
      )
    }

    return found
  }


  async updateFeedbackStatus(id: number, status: FeedbackStatus): Promise<Feedback> {
    const feedback = await this.getFeedbackById(id)
    feedback.status = status
    await feedback.save()
    return feedback
  }
}
