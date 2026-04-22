import { DomainError } from "./domain.error.js";

export class NameTooLongError extends DomainError {
    readonly code = 'NAME_TOO_LONG'

    constructor(maxLength: number){
        super(`The name must be a maximum of ${maxLength} characters long.`)
    }
}