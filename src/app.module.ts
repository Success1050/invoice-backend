import { Module } from '@nestjs/common';
import { CustomersController } from './customers/customers.controller';
import { InvoicesController } from './invoices/invoices.controller';
import { CustomersService } from './customers/customers.service';
import { InvoicesService } from './invoices/invoices.service';

@Module({
  imports: [],
  controllers: [CustomersController, InvoicesController],
  providers: [CustomersService, InvoicesService],
  exports: [CustomersService],
})
export class AppModule {}