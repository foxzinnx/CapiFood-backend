import type { TokenHasher } from "@/application/ports/token-hasher.js";

export class FakeTokenHasher implements TokenHasher {
    private counter = 0;

    hash(token: string): string {
        return `hashed:${token}`;
    }

    generateToken(): string {
        this.counter++;
        return `fake-refresh-token-${this.counter}`;
    }
}