import type { RestaurantOwner } from "../entities/restaurant-owner.entity.js";

export interface RestaurantOwnerRepository {
    create(owner: RestaurantOwner): Promise<void>;
    findById(id: string): Promise<RestaurantOwner | null>;
    findByEmail(email: string): Promise<RestaurantOwner | null>;
    findByCnpj(cnpj: string): Promise<RestaurantOwner | null>;
    save(owner: RestaurantOwner): Promise<void>;
}