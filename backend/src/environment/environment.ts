import * as dotenv from 'dotenv';
import * as fs from 'fs';
import { DotenvParseOutput } from 'dotenv';

export class Environment {
    public readonly host: string;
    public readonly port: number;
    public readonly username: string;
    public readonly password: string;
    public readonly database: string;
    public readonly jwt: string;
    public readonly sendgrid: string;
    public readonly stripe: string;

    private readonly envConfig: DotenvParseOutput;

    constructor() {
        const path: string = `${process.env.NODE_ENV || 'development'}.env`;
        this.envConfig = dotenv.parse(fs.readFileSync(path));

        this.host = this.envConfig.host;
        this.port = +this.envConfig.port;
        this.username = this.envConfig.username;
        this.password = this.envConfig.password;
        this.database = this.envConfig.database;
        this.jwt = this.envConfig.jwt;
        this.sendgrid = this.envConfig.sendgrid;
        this.stripe = this.envConfig.stripe;
    }
}
