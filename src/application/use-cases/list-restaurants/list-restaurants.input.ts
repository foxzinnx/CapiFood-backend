export interface ListRestaurantsInput {
    search?: string;
    city?: string;
    isOpen?: boolean;
    page?: number;
    perPage?: number;
}