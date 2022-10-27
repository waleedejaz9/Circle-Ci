import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import ResponseHandlerInterceptor from './interceptor/response-handler.interceptor'
import { Transport } from '@nestjs/microservices';

const microserviceOptions = {
  transport: Transport.TCP,
  options: {
    host: '127.0.0.1',
    port: 8878,
  },
};

async function bootstrap() {
   const app = await NestFactory.createMicroservice(AppModule, microserviceOptions);
  app.listen(()=>{
    console.log(`microservice is listening... `)
  })
}
bootstrap()
  