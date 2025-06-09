import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  deserializeUser(
    payload: Record<string, string>,
    done: (err: Error | null, user: Record<string, string>) => void
  ) {
    done(null, payload);
  }

  serializeUser(
    user: Record<string, string>,
    done: (err: Error | null, user: Record<string, string>) => void
  ) {
    done(null, user);
  }
}
