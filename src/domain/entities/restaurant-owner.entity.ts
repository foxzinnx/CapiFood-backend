import { NameTooShortError } from "../errors/name-too-short.error.js";
import { TooYoungError } from "../errors/too-young.error.js";
import type { CNPJ } from "../value-objects/cnpj.vo.js";
import type { Email } from "../value-objects/email.vo.js";
import type { UniqueEntityId } from "../value-objects/unique-entity-id.vo.js";
import { Entity } from "./base.entity.js";

export interface RestaurantOwnerProps {
    name: string;
    email: Email;
    password: string;
    cnpj: CNPJ;
    phone: string;
    birthDate: Date;
    createdAt: Date;
    updatedAt: Date;
}

export class RestaurantOwner extends Entity<RestaurantOwnerProps>{
    private static readonly MIN_NAME_LENGTH = 3;
    private static readonly MIN_AGE = 18;
    
    private constructor(props: RestaurantOwnerProps, id?: UniqueEntityId){
        super(props, id);
    }

    static create(props: Omit<RestaurantOwnerProps, 'createdAt' | 'updatedAt'>, id?: UniqueEntityId): RestaurantOwner {
        RestaurantOwner.validateName(props.name);
        RestaurantOwner.validateAge(props.birthDate);
        
        return new RestaurantOwner(
            {
                ...props,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            id
        )
    }

    get name(): string { return this._props.name }
    get email(): Email { return this._props.email }
    get password(): string { return this._props.password }
    get cnpj(): CNPJ { return this._props.cnpj }
    get phone(): string { return this._props.phone }
    get birthDate(): Date { return this._props.birthDate }
    get createdAt(): Date { return this._props.createdAt! }
    get updatedAt(): Date { return this._props.updatedAt! }

    updatePassword(hashedPassword: string): void {
        this._props.password = hashedPassword;
        this.touch();
    }

    updatePhone(phone: string): void {
        this._props.phone = phone;
        this.touch();
    }

    private static validateName(name: string): void {
        if(!name || name.trim().length < RestaurantOwner.MIN_NAME_LENGTH){
            throw new NameTooShortError();
        }
    }

    private static validateAge(birthDate: Date): void {
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();

        const birthdayThisYear = new Date(
            today.getFullYear(),
            birthDate.getMonth(),
            birthDate.getDate()
        )
        const hasHadBirthdayThisYear = today >= birthdayThisYear

        const realAge = hasHadBirthdayThisYear ? age : age - 1

        if(realAge < RestaurantOwner.MIN_AGE){
            throw new TooYoungError(RestaurantOwner.MIN_AGE)
        }
    }

    private touch(): void {
        this._props.updatedAt = new Date();
    }
}