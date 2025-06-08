import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { LoginUserDto } from '@myorg/contracts';
import { LocalAuthGuard } from '../auth/guards/local.auth.guard';
import { type Request } from 'express';
import { AuthenticatedGuard } from '../auth/guards/authenticated.guard';

@Controller('users')
export class UsersController {
  @Post('/login')
  @UseGuards(LocalAuthGuard)
  async login(@Body() dto: LoginUserDto, @Req() req: Request) {
    // This is mock session login
    await new Promise((resolve) => {
      req.logIn(req.user, () => {
        resolve(null);
      });
    });

    return await req.user;
  }

  @Get('/protected')
  @UseGuards(AuthenticatedGuard)
  async protected() {
    return true;
  }
}
