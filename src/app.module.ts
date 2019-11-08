import { Module } from '@nestjs/common';
import { FeedbackModule } from './feedback/feedback.module';
// import { ConfigModule } from './config/config.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
// import { ConfigService } from './config/config.service';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), FeedbackModule],
})
export class AppModule {}
