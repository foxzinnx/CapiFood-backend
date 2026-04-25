import { DomainError } from "./domain.error.js";

export class CnpjAlreadyInUseError extends DomainError{
    readonly code = 'CNPJ_ALREADY_IN_USE'

    constructor(){
        super('Cnpj already in use')
    }
}