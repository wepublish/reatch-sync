import { Injectable } from '@nestjs/common';
@Injectable()
export class WepublishConfiguration {
  username: string;
  password: string;
  token?: string;
}
