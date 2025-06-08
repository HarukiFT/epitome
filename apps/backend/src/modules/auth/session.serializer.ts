import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  deserializeUser(payload: any, done: (err: Error | null, user: any) => void) {
    done(null, payload);
  }

  serializeUser(user: any, done: (err: Error | null, user: any) => void) {
    done(null, user);
  }
}
