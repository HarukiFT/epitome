import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

import session from 'express-session';
import passport from 'passport';
import { config } from './common/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3000;

  app.useGlobalPipes(new ValidationPipe());

  app.use(
    session({
      secret: config.SESSION_SECRET,
      resave: false,
      saveUninitialized: true,
      cookie: {
        maxAge: 24 * 60 * 60 * 1000 * 30,
        httpOnly: true,
        // secure: true, -- configure mkcert
        sameSite: 'none',
      },
    })
  );

  app.enableCors({
    origin: [config.FRONTEND_URL, 'localhost'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
    credentials: true,
  });

  app.use(passport.initialize());
  app.use(passport.session());

  await app.listen(port, config.BACKEND_HOST);

  Logger.log(
    `🚀 Application is running on: http://${config.BACKEND_HOST}:${port}/${globalPrefix}`
  );
}

bootstrap();
