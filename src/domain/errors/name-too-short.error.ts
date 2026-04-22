import { DomainError } from "./domain.error.js";

export class NameTooShortError extends DomainError {
    readonly code = 'NAME_TOO_SHORT'

    constructor(minLength: number){
        super(`The name must have at least ${minLength} characters.`)
    }
}