import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { apiReference } from '@scalar/nestjs-api-reference';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const config = new DocumentBuilder()
    .setTitle('Server Monitoring Logs API')
    .setDescription('The server monitoring logs API description')
    .setVersion('1.0')
    .addTag('server-monitoring-logs')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);

  const document = documentFactory();

  app.use(
    '/reference',
    apiReference({
      content: document,
    }),
  );

  app.use('/openapi.json', (_, res) => {
    res.json(document);
  });
  
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
