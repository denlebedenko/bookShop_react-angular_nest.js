import { send, setApiKey } from '@sendgrid/mail';
import { Injectable } from '@nestjs/common';
import { Environment } from '../environment/Environment';

@Injectable()

export class SendGridService {

    config = new Environment();

    constructor() {
        setApiKey(this.config.sendgrid);
    }

    send(emailUser: string) {
        const msg = {
            to: emailUser,
            from: 'lebedenkodd@gmail.com',
            subject: 'Sending with Twilio SendGrid is Fun',
            template_id: this.config.sendgrid_template,
        };
        return send(msg);
    }
}
