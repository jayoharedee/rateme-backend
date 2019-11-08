import { BaseEntity, PrimaryGeneratedColumn, Column, Entity } from 'typeorm';
import { FeedbackStatus } from './feedback-status.enum';

@Entity()
export class Feedback extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: FeedbackStatus;
}
