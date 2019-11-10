import { Controller, Post, Body, Get, Query, Param, Delete, Patch, UsePipes, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { Feedback } from './feedback.entity';
import { FeedbackStatusValidation } from './pipes/feedback-status-validation.pipe';
import { FeedbackStatus } from './feedback-status.enum';
import { FilterFeedbackDto } from './dto/filter-feedback.dto';

@Controller('feedback')
export class FeedbackController {
  constructor(private feedbackService: FeedbackService) {}

  @Post()
  @UsePipes(ValidationPipe)
  createFeedback(@Body() createFeedbackDto: CreateFeedbackDto): Promise<Feedback> {
    return this.feedbackService.createFeedback(createFeedbackDto)
  }

  @Delete('/:id')
  deleteTaskById(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.feedbackService.deleteFeedbackById(id)
  }

  @Get()
  getFeedback(@Query(ValidationPipe) filterDto: FilterFeedbackDto) {
    return this.feedbackService.getAllFeedback(filterDto)
  }

  @Get('/:id')
  getFeedbackById(@Param('id', ParseIntPipe) id: number): Promise<Feedback> {
    return this.feedbackService.getFeedbackById(id)
  }

  @Patch('/:id/status')
  updateFeedbackStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('status', FeedbackStatusValidation) status: FeedbackStatus
  ): Promise<Feedback> {
    return this.feedbackService.updateFeedbackStatus(id, status)
  }
}
