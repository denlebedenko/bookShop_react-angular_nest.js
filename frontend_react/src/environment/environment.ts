import { config } from 'dotenv';

export class Environment {

    get REACT_APP_GET_BOOKS_URL() {
        return process.env.REACT_APP_GET_BOOKS_URL;
    }
    get REACT_APP_GET_CART_ITEMS() {
        return process.env.REACT_APP_GET_CART_ITEMS;
    }

    get REACT_APP_REGISTRATION_USER() {
        return process.env.REACT_APP_REGISTRATION_USER;
    }

    get REACT_APP_SIGNIN_USER(): string | undefined {
        return process.env.REACT_APP_SIGNIN_USER;
    }

    constructor() {
        const pathFile: string = `${process.env.NODE_ENV || 'development'}.env`;
        config({ path: pathFile });
    }
}
