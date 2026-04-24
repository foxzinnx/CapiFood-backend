import type { UniqueEntityId } from "../value-objects/unique-entity-id.vo.js";
import { Entity } from "./base.entity.js";
import type { OrderItem } from "./order-item.entity.js";

export type OrderStatus =
    | 'PENDING'
    | 'CONFIRMED'
    | 'PREPARING'
    | 'READY'
    | 'DELIVERING'
    | 'DELIVERED'
    | 'CANCELLED'

export interface OrderProps {
    customerId: UniqueEntityId;
    restaurantId: UniqueEntityId;
    items: OrderItem[];
    status: OrderStatus;
    total: number;
    notes?: string | null;
    createdAt: Date;
    updatedAt: Date;
}

export class Order extends Entity<OrderProps>{
    private constructor(props: OrderProps, id?: UniqueEntityId){
        super(props, id)
    }

    static create(props: Omit<OrderProps, 'total' | 'status' | 'createdAt' | 'updatedAt'> & { status?: OrderStatus }, id?: UniqueEntityId): Order {
        const validatedItems = Order.validateAndCalculateItems(props.items);

        return new Order(
            {
                ...props,
                items: validatedItems.items,
                total: validatedItems.total,
                status: props.status ?? 'PENDING',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            id
        )
    }

    get customerId(): UniqueEntityId { return this._props.customerId }
    get restaurantId(): UniqueEntityId { return this._props.restaurantId }
    get items(): OrderItem[] { return this._props.items }
    get status(): OrderStatus { return this._props.status }
    get total(): number { return this._props.total }
    get notes(): string | null { return this._props.notes ?? null }
    get createdAt(): Date { return this._props.createdAt }
    get updatedAt(): Date { return this._props.updatedAt }

    confirm(): void { this.setStatus('CONFIRMED') }
    startPreparing(): void { this.setStatus('PREPARING') }
    markReady(): void { this.setStatus('READY') }
    startDelivering(): void { this.setStatus('DELIVERING') }
    deliver(): void { this.setStatus('DELIVERED') }
    cancel(): void { this.setStatus('CANCELLED') }

    private static validateAndCalculateItems(items: OrderItem[]) {
        if(items.length === 0){
            throw new Error('The order must contain at least one item.')
        }

        const total = parseFloat(
            items.reduce((acc, item) => acc + item.subtotal, 0).toFixed(2)
        );

        return { items, total }
    }

    private setStatus(status: OrderStatus): void {
        this._props.status = status;
        this._props.updatedAt = new Date();
    }
}