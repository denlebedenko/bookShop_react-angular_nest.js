import { Controller, Post, Body } from '@nestjs/common';
import { SendGridService } from '../services/sendgrid.service';

@Controller('mail')

export class SendGridController {

    constructor(private readonly sendGridService: SendGridService) { }

    @Post()
    sendMail(@Body() email: string) {
        return this.sendGridService.send(email);
    }
}
