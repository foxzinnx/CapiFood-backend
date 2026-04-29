export interface UpdateRestaurantPhotoInput {
    restaurantId: string;
    ownerId: string;
    fileName: string;
    fileType: string;
    fileBuffer: string;
}