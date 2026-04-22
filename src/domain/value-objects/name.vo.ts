import { NameTooLongError } from "../errors/name-too-long.error.js";
import { NameTooShortError } from "../errors/name-too-short.error.js";

export class Name {
    private static readonly MIN_LENGTH = 3;
    private static readonly MAX_LENGTH = 100;

    private readonly _value: string;

    private constructor(value: string){
        this._value = value;
    }

    public static create(name: string): Name {
        const trimmed = name?.trim();

        if(!trimmed || trimmed.length < Name.MIN_LENGTH){
            throw new NameTooShortError(Name.MIN_LENGTH);
        }

        if(trimmed.length > Name.MAX_LENGTH){
            throw new NameTooLongError(Name.MAX_LENGTH);
        }

        return new Name(trimmed);
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