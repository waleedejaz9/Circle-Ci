import { NestFactory } from '@nestjs/core'
import {ValidationPipe} from '@nestjs/common'
import { AppModule } from './app.module'
import ResponseHandlerInterceptor from './interceptor/response-handler.interceptor'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new ResponseHandlerInterceptor())
  await app.listen(3000)
}
bootstrap()
  