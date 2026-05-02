import { DomainError } from "./domain.error.js"

export class ReviewAlreadyExistsError extends DomainError {
    readonly code = 'REVIEW_ALREADY_EXISTS'

    constructor() {
        super('You have already rated this restaurant');
    }
}