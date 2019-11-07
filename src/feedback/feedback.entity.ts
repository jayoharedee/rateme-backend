import { BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";
import { FeedbackStatus } from "./feedback.model";

export class Feedback extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  status: FeedbackStatus;
}