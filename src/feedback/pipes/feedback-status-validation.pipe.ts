import { PipeTransform, BadRequestException } from "@nestjs/common";
import { FeedbackStatus } from "../feedback.model";

export class FeedbackStatusValidation implements PipeTransform {
  readonly allowedStatuses = [
    FeedbackStatus.OPEN,
    FeedbackStatus.IN_PROGRESS,
    FeedbackStatus.DONE,
  ]

  transform(value: any) {
    value = value.toUpperCase()

    if (!this.isStatusValid(value)) {
      throw new BadRequestException(
        `"${value}" is an invalid status`
      )
    }

    return value
  }

  private isStatusValid(status: any) {
    const idx = this.allowedStatuses.indexOf(status)
    return idx !== -1
  }
}