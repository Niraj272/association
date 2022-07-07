import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

import * as dotenv from 'dotenv';
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const logger = new Logger('bootstrap');

  app.setGlobalPrefix('api');
  
  const port = process.env.NODE_PORT || 3000;
  await app.listen(port);
  logger.log(`Application start on port ${port}`);
}

bootstrap();
