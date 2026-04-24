import type { Customer } from "../entities/customer.entity.js";

export interface CustomerRepository {
    create(customer: Customer): Promise<void>;
    findById(id: string): Promise<Customer | null>;
    findByEmail(email: string): Promise<Customer | null>;
    findByCpf(cpf: string): Promise<Customer | null>;
    save(customer: Customer): Promise<void>;
}