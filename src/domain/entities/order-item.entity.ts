import type { UniqueEntityId } from "../value-objects/unique-entity-id.vo.js";
import { Entity } from "./base.entity.js";

export interface OrderItemProps {
    menuItemId: UniqueEntityId;
    menuItemName: string;
    quantity: number;
    unitPrice: number;
}

export class OrderItem extends Entity<OrderItemProps>{
    private constructor(props: OrderItemProps, id?: UniqueEntityId){
        super(props, id);
    }

    static create(props: OrderItemProps, id?: UniqueEntityId): OrderItem {
        OrderItem.validate(props);

        return new OrderItem(props, id);
    }

    get menuItemId(): UniqueEntityId { return this._props.menuItemId }
    get menuItemName(): string { return this._props.menuItemName }
    get quantity(): number { return this._props.quantity }
    get unitPrice(): number { return this._props.unitPrice }
    get subtotal(): number {
        return parseFloat((this._props.quantity * this._props.unitPrice).toFixed(2))
    }

    private static validate(props: OrderItemProps): void {
        if (props.quantity <= 0) {
            throw new Error('The quantity must be greater than zero.')
        }
    
        if (props.unitPrice <= 0) {
            throw new Error('The unit price must be greater than zero.')
        }
    }
}