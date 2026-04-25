export interface Hasher {
    hash(plain: string): Promise<string>;
    compare(plain: string): Promise<boolean>;
}