import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  private customers = [
    { id: 1, name: 'John Doe', email: 'john@gmail.com', phone: '08123456789', createdAt: new Date('2025-01-01') },
    { id: 2, name: 'Jane Smith', email: 'jane@gmail.com', phone: '07098765432', createdAt: new Date('2025-02-01') },
    { id: 3, name: 'Emmanuel Eze', email: 'emmanuel@example.com', phone: '09011122233', createdAt: new Date() },
  ];

  findAll() {
    return this.customers;
  }

  findOne(id: number) {
    const customer = this.customers.find((c) => c.id === id);
    return customer ?? null;
  }

  create(data: any) {
    const newCustomer = {
      id: Date.now(),
      createdAt: new Date(),
      ...data,
    };
    this.customers.push(newCustomer);
    return newCustomer;
  }

  update(id: number, data: any) {
    const index = this.customers.findIndex((c) => c.id === id);
    if (index === -1) return null;

    this.customers[index] = { ...this.customers[index], ...data };
    return this.customers[index];
  }

  remove(id: number) {
    this.customers = this.customers.filter((c) => c.id !== id);
    return { message: 'Customer deleted successfully' };
  }
}