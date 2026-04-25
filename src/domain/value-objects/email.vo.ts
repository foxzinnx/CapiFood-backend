import { InvalidEmailError } from "../errors/invalid-email.error.js";

export class Email {
    private readonly _value: string;

    private constructor(value: string){
        this._value = value;
    }

    static create(value: string): Email {
        const trimmed = value.trim().toLowerCase();
        if(!Email.isValid(trimmed)){
            throw new InvalidEmailError();
        }

        return new Email(trimmed);
    }

    get value(): string {
        return this._value;
    }

    equals(email: Email): boolean {
        return this._value === email.value
    }

    toString(): string {
        return this._value
    }

    private static isValid(value: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(value);
    }
}