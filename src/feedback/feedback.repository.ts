import { Repository, EntityRepository } from "typeorm";
import { Feedback } from "./feedback.entity";
import { CreateFeedbackDto } from "./dto/create-feedback.dto";
import { FeedbackStatus } from "./feedback-status.enum";
import { FilterFeedbackDto } from "./dto/filter-feedback.dto";


@EntityRepository(Feedback)
export class FeedbackRepository extends Repository<Feedback> {
  async getTasks(filterDto: FilterFeedbackDto): Promise<Feedback[]> {
    const { status, search } = filterDto
    const query = this.createQueryBuilder('feedback')

    if (status) {
      query.andWhere('feedback.status = :status', { status })
    }

    if (search) {
      query.andWhere(
        'feedback.title LIKE :search OR feedback.description LIKE :search',
        { search: `%${search}%` }
      )
    }

    const feedback = await query.getMany()
    return feedback;
  }

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