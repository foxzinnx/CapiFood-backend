import { DomainError } from "./domain.error.js";

export class ResourceNotFoundError extends DomainError {
    readonly code = 'RESOURCE_NOT_FOUND'

    constructor(resource: string){
        super(`${resource} not found`);
    }
}