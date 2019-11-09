import { Repository, EntityRepository } from "typeorm";
import { Feedback } from "./feedback.entity";
import { CreateFeedbackDto } from "./dto/create-feedback.dto";
import { FeedbackStatus } from "./feedback-status.enum";


@EntityRepository(Feedback)
export class FeedbackRepository extends Repository<Feedback> {
  async createFeedback(createFeedbackDto: CreateFeedbackDto): Promise<Feedback> {
    const { title, description } = createFeedbackDto

    const feedback = new Feedback()
    feedback.title = title
    feedback.description = description
    feedback.status = FeedbackStatus.OPEN

    await feedback.save()

    return feedback
  }
}