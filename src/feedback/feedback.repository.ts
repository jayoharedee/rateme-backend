import { Repository, EntityRepository } from "typeorm";
import { Feedback } from "./feedback.entity";


@EntityRepository(Feedback)
export class FeedbackRepository extends Repository<Feedback> {

}