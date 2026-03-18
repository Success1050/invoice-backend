import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Get()
  findAll() {
    return this.customersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customersService.findOne(Number(id));
  }

  @Post()
  create(@Body() body: CreateCustomerDto) {
    return this.customersService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.customersService.update(Number(id), body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customersService.remove(Number(id));
  }
}