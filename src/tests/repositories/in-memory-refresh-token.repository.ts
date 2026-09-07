import type { RefreshToken } from "@/domain/entities/refresh-token.entity.js";
import type { RefreshTokenRepository } from "@/domain/repositories/refresh-token.repository.js";

export class InMemoryRefreshTokenRepository implements RefreshTokenRepository {
    public items: RefreshToken[] = [];
    
    async create(token: RefreshToken): Promise<void> {
        this.items.push(token);
    }

    async findByTokenHash(tokenHash: string): Promise<RefreshToken | null> {
        return this.items.find((t) => t.tokenHash === tokenHash) ?? null;
    }

    async save(token: RefreshToken): Promise<void> {
        const index = this.items.findIndex((t) => t.id.value === token.id.value);
        if(index >= 0) this.items[index] = token;
    }

    async revokeAllByUserId(userId: string): Promise<void> {
        this.items
            .filter((t) => t.userId.value === userId && !t.isRevoked)
            .forEach((t) => t.revoke())
    }

}