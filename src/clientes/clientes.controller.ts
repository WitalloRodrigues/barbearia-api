import { Body, Controller, Get, Post } from '@nestjs/common';
import { Cliente, Prisma } from '@prisma/client';
import { ClientesService } from './clientes.service';

@Controller('clientes')
export class ClientesController {
  constructor(private service: ClientesService) {}

  @Get()
  findAll(): Promise<Cliente[]> {
    return this.service.findAll();
  }

  @Post()
  create(@Body() body: Prisma.ClienteCreateInput): Promise<Cliente> {
    return this.service.create(body);
  }
}
