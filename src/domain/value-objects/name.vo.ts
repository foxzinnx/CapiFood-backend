import { NameTooShortError } from "../errors/name-too-short.error.js";

export class Name {
    private readonly _value: string;

    private constructor(value: string){
        this._value = value;
    }

    public static create(name: string): Name {
        if(!name){
            throw new NameTooShortError()
        }

        const trimmedName = name.trim();

        if(trimmedName.length < 3){
            throw new NameTooShortError()
        }

        return new Name(trimmedName);
    }

    get value(): string {
         return this._value
    }

    toString(): string {
        return this._value;
    }

    equals(other: Name): boolean {
        return this._value === other._value;
    }
}