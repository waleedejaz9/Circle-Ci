import { ClientProxyFactory, Transport, ClientProxy } from '@nestjs/microservices';

export default class BaseService{
    protected client: ClientProxy;
    constructor() {
        this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: 8878,
      },
    });
    }
}