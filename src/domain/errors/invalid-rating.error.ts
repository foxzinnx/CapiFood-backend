import { DomainError } from "./domain.error.js"

export class InvalidRatingError extends DomainError {
    readonly code = 'INVALID_RATING'
    
    constructor(min: number, max: number) {
        super(`The rating must be a whole number between ${min} and ${max}`)
        this.name = 'InvalidRatingError'
    }
}