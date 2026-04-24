import type { Order } from "../entities/order.entity.js";

export interface ListOrdersFilters {
    page?: number;
    perPage?: number;
}

export interface PaginatedResult<T>{
    data: T[];
    total: number;
    page: number;
    perPage: number;
    totalPages: number;
}

export interface OrderRepository {
    create(order: Order): Promise<void>;
    findById(id: string): Promise<Order | null>;
    findByCustomerId(customerId: string, filters: ListOrdersFilters): Promise<PaginatedResult<Order>>;
    findByRestaurantId(restaurantId: string, filters: ListOrdersFilters): Promise<PaginatedResult<Order>>;
    save(order: Order): Promise<void>;
}