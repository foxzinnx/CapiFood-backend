import { DomainError } from "./domain.error.js";

export class TooYoungError extends DomainError {
    readonly code = 'TOO_YOUNG'
    
    constructor(minAge = 18){
        super(`The restaurant owner must be at least ${minAge} years old.`)
    }
}