import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!!';
  }

  getNewEndPoint(): string {
    return 'Soy nuevo';
  }
}
