import { DomainError } from "./domain.error.js";

export class RestaurantAlreadyExistsError extends DomainError {
    readonly code = 'RESTAURANT_ALREADY_EXISTS';

    constructor(){
        super('Restaurant already exists');
    }
}