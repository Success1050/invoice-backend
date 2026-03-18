export class CreateInvoiceDto {
  customerId: number;
  amount: number;
  status: string;
  description?: string;
}