import { DomainError } from "./domain.error.js";

export class InvalidPriceError extends DomainError {
    readonly code = 'INVALID_PRICE'

    constructor(){
        super('Invalid price')
    }
}