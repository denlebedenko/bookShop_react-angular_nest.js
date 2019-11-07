import { config } from 'dotenv';


export class Environment {

    get host(): string | undefined   {
        return process.env.host;
    }

    get port(): string | undefined {
        return process.env.port;
    }

    get username(): string | undefined {
        return process.env.username;
    }

    get password(): string | undefined  {
        return process.env.password;
    }

    get REACT_APP_DATABASE() {
        return process.env.REACT_APP_DATABASE;
    }

    get jwtSecret(): string | undefined  {
        return process.env.jwtSecret;
    }

    get sendgrid(): string | undefined  {
        return process.env.sendgrid;
    }

    get stripe() {
        return process.env.stripe;
    }

    constructor() {
        const pathFile: string = `${process.env.NODE_ENV || 'development'}.env`;
        config({path: pathFile});
    }
}
