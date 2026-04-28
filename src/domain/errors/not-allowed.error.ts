import { DomainError } from "./domain.error.js";

export class NotAllowedError extends DomainError {
    readonly code = 'NOT_ALLOWED'

    constructor(){
        super('You do not have permission to perform this action')
    }
}