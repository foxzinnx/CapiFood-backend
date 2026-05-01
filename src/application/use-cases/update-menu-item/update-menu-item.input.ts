export interface UpdateMenuItemInput{
    menuItemId: string;
    ownerId: string;
    name?: string;
    description?: string | null;
    price?: number;
    isAvailable?: boolean;
}