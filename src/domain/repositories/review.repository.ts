import type { Review } from "../entities/review.entity.js";

export interface ListReviewsFilters {
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

export interface RestaurantRatingSummary {
    average: number;
    total: number;
    distribution: {
        [star: number]: number
    }
}

export interface ReviewRepository {
    create(review: Review): Promise<void>;
    findById(id: string): Promise<Review | null>;
    findByCustomerAndRestaurant(customerId: string, restaurantId: string): Promise<Review | null>;
    findByRestaurantId(restaurantId: string, filters: ListReviewsFilters): Promise<PaginatedResult<Review>>;
    findByCustomerId(customerId: string, filters: ListReviewsFilters): Promise<PaginatedResult<Review>>;
    getRatingSummary(restaurantId: string): Promise<RestaurantRatingSummary>;
    save(review: Review): Promise<void>;
    delete(id: string): Promise<void>;
}