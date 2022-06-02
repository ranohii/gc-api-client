import {Credentials} from "google-auth-library/build/src/auth/credentials";

export class Token {
  private readonly _value: Credentials

  constructor(value: Credentials) {
    this._value = value;
  }

  get value(): Credentials {
    return this._value;
  }
}