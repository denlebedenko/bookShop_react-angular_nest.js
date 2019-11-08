import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as fs from 'fs';
import * as express from 'express';
import * as http from 'http';
import * as https from 'https';
import { ExpressAdapter } from '@nestjs/platform-express';
import { ApplicationExceptionFilter } from './common/filter/application-exception.filter';
import { ExceptionFilterCustom } from './common/filter/exception.filter';
import { Environment } from './environment/Environment';

async function bootstrap() {

  const options = new DocumentBuilder()
  .setTitle('Books')
  .setDescription('Books Api')
  .setVersion('1.0')
  .addTag('books')
  .addBearerAuth()
  .build();

  const httpsOptions = {
    key: fs.readFileSync('src/common/secret/key.pem'),
    cert: fs.readFileSync('src/common/secret/cert.pem'),
  };

  const server = express();
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(server),
  );

  const config = new Environment();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  app.enableCors();

  app.useGlobalFilters(new ExceptionFilterCustom(), new ApplicationExceptionFilter());
  await app.init();

  http.createServer(server).listen(config.port);
  https.createServer(httpsOptions, server).listen(443);
}
bootstrap();
