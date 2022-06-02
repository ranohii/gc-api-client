import {CredentialsRepository} from "@/domain/models/credentials/credentialsRepository";
import {Credentials} from "@/domain/models/credentials/credentials";
import fs from "fs";
import {injectable} from "inversify";

@injectable()
export class FsCredentialsRepositoryImpl implements CredentialsRepository {
  private filesystem = fs

  read(path: string): Promise<Credentials> {
    return new Promise((resolve, reject) => {
      this.filesystem.readFile(path, (err , credentials) => {
        if (err) return reject(err)
        const result = JSON.parse(credentials as unknown as string)
        resolve(Credentials.fromFile(result))
      })
    })
  }
}