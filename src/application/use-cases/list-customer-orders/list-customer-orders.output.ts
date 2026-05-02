import type { OrderItemOutputDTO } from "@/domain/entities/order-item.entity.js";

export interface ListCustomerOrdersOutput {
    orders: OrderItemOutputDTO[];
    total: number;
    page: number;
    perPage: number;
    totalPages: number;
}