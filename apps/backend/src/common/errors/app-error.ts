import { HttpException, HttpStatus } from '@nestjs/common';

export class AppError extends HttpException {
  constructor(
    code: string,
    message?: any,
    status: HttpStatus = HttpStatus.BAD_REQUEST
  ) {
    super(
      {
        error: code,
        message,
      },
      status
    );
  }
}
