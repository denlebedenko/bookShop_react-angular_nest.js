export interface JwtPayload {
    readonly username: string;
    readonly email: string;
    readonly role: string;
}
