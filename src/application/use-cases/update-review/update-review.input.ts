export interface UpdateReviewInput {
    reviewId: string;
    customerId: string;
    rating?: number;
    description?: string | null;
}