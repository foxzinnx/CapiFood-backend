import { DomainError } from "./domain.error.js";

export class CannotReviewOwnRestaurantError extends DomainError {
    readonly code = 'CANNOT_REVIEW_OWN_RESTAURANT'

    constructor() {
        super('The owner cannot rate their own restaurant')
    }
}