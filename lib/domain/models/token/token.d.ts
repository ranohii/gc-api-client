import { Credentials } from "google-auth-library/build/src/auth/credentials";
export declare class Token {
    private readonly _value;
    constructor(value: Credentials);
    get value(): Credentials;
}
