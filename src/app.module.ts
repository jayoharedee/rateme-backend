import { Module } from '@nestjs/common';
import { FeedbackModule } from './feedback/feedback.module';
import { ConfigModule } from './config/config.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [FeedbackModule, ConfigModule, TypeOrmModule.forRoot(typeOrmConfig)],
})
export class AppModule {}
