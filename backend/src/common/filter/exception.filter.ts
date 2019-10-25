import { Catch, ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { Response } from 'express';
@Catch(Error)
export class ExceptionFilterCustom implements ExceptionFilter {
  catch(exception: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    response
      .status(500)
      .json({
        message: 'Internal Server Error!',
      });
  }
}
