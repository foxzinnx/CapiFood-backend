import { DomainError } from "./domain.error.js"

export class RestaurantClosedError extends DomainError {
    readonly code = 'RESTAURANT_CLOSED'

    constructor(){
        super('The restaurant is closed and not accepting orders at the moment')
    }
}