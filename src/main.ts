import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('My first API documentation')
    .setDescription('The first API created')
    .setVersion('1.0')
    .addTag('users')
    .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('documentation', app, document);
    app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
