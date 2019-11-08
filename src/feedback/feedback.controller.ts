import { Controller, Post, Body, Get, Query, Param, Delete, Patch, UsePipes, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
// import { CreateFeedbackDto } from './dto/create-feedback.dto';
// import { FeedbackStatus } from './feedback-status.enum';
// import { FilterFeedbackDto } from './dto/filter-feedback.dto';
// import { FeedbackStatusValidation } from './pipes/feedback-status-validation.pipe';
import { Feedback } from './feedback.entity';

@Controller('feedback')
export class FeedbackController {
  constructor(private feedbackService: FeedbackService) {}

  // @Post()
  // @UsePipes(ValidationPipe)
  // createFeedback(@Body() createFeedbackDto: CreateFeedbackDto): Feedback {
  //   return this.feedbackService.createFeedback(createFeedbackDto)
  // }

  // @Delete('/:id')
  // deleteTaskById(@Param('id') id: string) {
  //   this.feedbackService.deleteFeedbackById(id)
  // }

  // @Get()
  // getFeedback(@Query(ValidationPipe) filterFeedback: FilterFeedbackDto): Feedback[] {
  //   if (Object.keys(filterFeedback).length) {
  //     return this.feedbackService.getFeedbackWithFilters(filterFeedback)
  //   } else {
  //     return this.feedbackService.getAllFeedback()
  //   }
  // }

  @Get('/:id')
  getFeedbackById(@Param('id', ParseIntPipe) id: number): Promise<Feedback> {
    return this.feedbackService.getFeedbackById(id)
  }

  // @Patch('/:id/status')
  // updateFeedbackStatus(
  //   @Param('id') id: string,
  //   @Body('status', FeedbackStatusValidation) status: FeedbackStatus
  // ): Feedback {
  //   return this.feedbackService.updateFeedbackStatus(id, status)
  // }
}
