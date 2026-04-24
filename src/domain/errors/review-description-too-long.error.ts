import { DomainError } from "./domain.error.js"

export class ReviewDescriptionTooLongError extends DomainError {
    readonly code = 'REVIEW_DESCRIPTION_TOO_LONG';    
    
    constructor(maxLength: number) {
        super(`The description review must be a maximum of ${maxLength} characters long.`)
        this.name = 'ReviewDescriptionTooLongError'
    }
}