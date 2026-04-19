import { UniqueEntityId } from "@/domain/value-objects/unique-entity-id.vo.js";

export abstract class Entity<Props> {
    private readonly _id: UniqueEntityId;
    protected _props: Props;

    constructor(props: Props, id?: UniqueEntityId){
        this._id = id ?? new UniqueEntityId()
        this._props = props;
    }

    get id(): UniqueEntityId {
        return this._id
    }

    equals(other: Entity<Props>): boolean {
        return this._id.equals(other._id);
    }
}