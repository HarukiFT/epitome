import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { LocalAuthGuard } from './guards/local.auth.guard';
import { SessionSerializer } from './session.serializer';

@Module({
  imports: [PassportModule.register({ session: true })],
  controllers: [],
  providers: [AuthService, LocalStrategy, LocalAuthGuard, SessionSerializer],
})
export class AuthModule {}
