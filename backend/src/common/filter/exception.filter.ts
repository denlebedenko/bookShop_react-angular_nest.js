import { Catch, ArgumentsHost, ExceptionFilter, HttpException } from '@nestjs/common';
import { Response } from 'express';
@Catch(Error)
export class ExceptionFilterCustom implements ExceptionFilter {
  catch(exception: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    if (exception instanceof HttpException) {
      response
      .status(exception.getStatus())
      .json({
        message: exception.message,
      });
    } else {
      response
        .status(500)
        .json({
          message: exception.message,
        });
    }
  }
}
