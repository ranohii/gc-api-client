import {TokenRepository} from "@/domain/models/token/tokenRepository";
import {Token} from "@/domain/models/token/token";
import * as fs from "fs";
import {injectable} from "inversify";

@injectable()
export class FsTokenRepositoryImpl implements TokenRepository {
  private filesystem = fs

  read(path: string): Promise<Token> {
    return new Promise((resolve, reject) => {
      this.filesystem.readFile(path, (err , token) => {
        if (err) return reject(err)
        const result = JSON.parse(token as unknown as string)
        resolve(new Token(result))
      })
    })
  }

  write(path: string, token: Token): Promise<void> {
    return new Promise( resolve => {
      // Store the token to disk for later program executions
      this.filesystem.writeFile(path, JSON.stringify(token.value), (err: any) => {
        if (err) return console.error(err);
        console.log('Token stored to', path);
        resolve()
      });
    })
  }
}