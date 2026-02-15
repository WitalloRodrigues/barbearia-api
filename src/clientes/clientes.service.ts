import { Injectable } from '@nestjs/common';
import { Cliente, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ClientesService {
  constructor(private prisma: PrismaService) {}

  findAll(): Promise<Cliente[]> {
    return this.prisma.cliente.findMany();
  }

  create(data: Prisma.ClienteCreateInput): Promise<Cliente> {
    return this.prisma.cliente.create({ data });
  }
}
