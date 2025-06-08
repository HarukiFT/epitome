import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  // TODO: Implement business logic
  async validateUser(email: string, password: string) {
    return {
      email,
      password,
    };
  }
}
