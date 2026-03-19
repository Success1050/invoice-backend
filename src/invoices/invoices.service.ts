import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { CustomersService } from '../customers/customers.service';

@Injectable()
export class InvoicesService {
  constructor(
    @Inject(forwardRef(() => CustomersService))
    private readonly customersService: CustomersService,
  ) {}

  private invoices = [
    { id: 1, customerId: 1, amount: 500, status: 'paid', description: 'Design Services', createdAt: new Date('2025-03-01') },
    { id: 2, customerId: 2, amount: 300, status: 'pending', description: 'Web Development', createdAt: new Date('2025-03-05') },
    { id: 3, customerId: 1, amount: 1500, status: 'overdue', description: 'Monthly Retainer', createdAt: new Date('2025-02-15') },
    { id: 4, customerId: 3, amount: 120, status: 'paid', description: 'Logo Mockup', createdAt: new Date() },
  ];

  private enrichWithCustomer(invoice: any) {
    const { customerId, ...rest } = invoice;
    const customer = this.customersService.findOne(customerId);
    return { ...rest, customer: customer ?? null };
  }

  findAll() {
    return this.invoices.map(invoice => this.enrichWithCustomer(invoice));
  }

  findOne(id: number) {
    const invoice = this.invoices.find(i => i.id === id);
    if (!invoice) return null;
    return this.enrichWithCustomer(invoice);
  }

  create(data: any) {
    const newInvoice = {
      id: Date.now(),
      createdAt: new Date(),
      ...data,
    };
    this.invoices.push(newInvoice);
    return this.enrichWithCustomer(newInvoice);
  }

  update(id: number, data: any) {
    const index = this.invoices.findIndex(i => i.id === id);
    if (index === -1) return null;

    this.invoices[index] = { ...this.invoices[index], ...data };
    return this.enrichWithCustomer(this.invoices[index]);
  }

  remove(id: number) {
    this.invoices = this.invoices.filter(i => i.id !== id);
    return { message: 'Deleted successfully' };
  }

  removeByCustomerId(customerId: number) {
    this.invoices = this.invoices.filter(i => i.customerId !== customerId);
  }
}