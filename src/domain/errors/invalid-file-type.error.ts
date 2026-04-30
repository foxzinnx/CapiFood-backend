import { DomainError } from "./domain.error.js";

export class InvalidFileTypeError extends DomainError {
    readonly code = 'INVALID_FILE_TYPE'

    constructor(){
        super('Invalid image format. Use JPEG, PNG, or WebP')
    }
}