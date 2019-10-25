import { send, setApiKey } from '@sendgrid/mail';
import { Injectable } from '@nestjs/common';
import { Environment } from '../environment/Environment';

@Injectable()

export class SendGridService {

    config = new Environment();

    constructor() {
        setApiKey(this.config.sendgrid);
    }

    send() {
        const msg = {
            to: 'lebedenkodd@gmail.com',
            from: 'lebedenkodd@gmail.com',
            subject: 'Sending with Twilio SendGrid is Fun',
            template_id: 'd-3a897e3bbed8440ea3db38934732f15e',
            text: 'and easy to do anywhere, even with Node.js',
            html: '<strong>and easy to do anywhere, even with Node.js</strong>',
        };
        return send(msg);
    }
}
