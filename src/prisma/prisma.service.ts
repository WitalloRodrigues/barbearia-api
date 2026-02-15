import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  async onModuleInit() {
    console.log('🔌 Tentando conectar ao banco de dados...');
    try {
      const timeout = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Timeout na conexão')), 5000),
      );
      await Promise.race([this.$connect(), timeout]);
      console.log('✅ Conectado ao banco de dados');
    } catch (error) {
      console.error('❌ Erro ao conectar ao banco de dados:', error);
      console.log('⚠️  Continuando sem conexão ao banco...');
    }
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
