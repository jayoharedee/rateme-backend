import { Module } from '@nestjs/common';
import { FeedbackModule } from './feedback/feedback.module';

@Module({
  imports: [FeedbackModule],
})
export class AppModule {}
