import { Controller, Post } from '@nestjs/common';
import { SendGridService } from '../services/sendgrid.service';

@Controller('mail')

export class SendGridController {

    constructor(private readonly sendGridService: SendGridService) {

    }
    @Post()
    sendMail() {
    return this.sendGridService.send();
    }
}
