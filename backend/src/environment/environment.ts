import * as dotenv from 'dotenv';
import * as fs from 'fs';
import { Injectable } from '@nestjs/common';
@Injectable()

export class Environment {

    get host(): string   {
        return process.env.host;
    }

    get port(): number {
        return +process.env.port;
    }

    get username(): string {
        return process.env.username;
    }

    get password(): string  {
        return process.env.password;
    }

    get database(): string  {
        return process.env.database;
    }

    get jwtSecret(): string  {
        return process.env.jwtSecret;
    }

    get sendgrid(): string  {
        return process.env.sendgrid;
    }

    get stripe(): string  {
        return process.env.stripe;
    }

    constructor() {
        const filePath: string = `${process.env.NODE_ENV || 'develompent'}.env`;
        const environmentConfiguration: dotenv.DotenvParseOutput = dotenv.parse(fs.readFileSync(filePath));
        this.initialize(environmentConfiguration);
    }

    private initialize(environmentConfiguration: dotenv.DotenvParseOutput) {
        for (const variable in environmentConfiguration) {
            if (environmentConfiguration.hasOwnProperty(variable)) {
                process.env[variable] = environmentConfiguration[variable];
            }
        }
    }
}
