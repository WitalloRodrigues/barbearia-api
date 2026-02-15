import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  console.log('🚀 Iniciando aplicação NestJS...');
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT ?? 3000;
  await app.listen(port);
  console.log(`✅ API ouvindo em http://localhost:${port}`);
}

bootstrap().catch((err) => {
  console.error('❌ Erro ao iniciar aplicação:', err);
  process.exit(1);
});
