import { Injectable } from '@nestjs/common';
import { version } from 'os';

@Injectable()
export class AppService {
  getHello(): any {
    return {
      success: true,
      message: 'Venegas posts api online',
      data: "Sistema Posts Api",
      version: '1.0.0',
    }
  }

  gethealth(): any {
    return {
      success: true,
      message: 'Venegas posts api health ',
      data: "Sistema Posts Api",
      version: '1.0.0',
    };
  }
}
