export interface ListRestaurantOrdersInput{
    restaurantId: string;
    ownerId: string;
    page?: number;
    perPage?: number;
}