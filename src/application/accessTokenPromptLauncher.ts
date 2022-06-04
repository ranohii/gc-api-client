import {OAuth2Client} from "google-auth-library/build/src/auth/oauth2client";
import {TokenRepository} from "@/domain/models/token/tokenRepository";
import readline from "readline";
import {inject, injectable} from "inversify";
import {TYPES} from "@/config/types";
import {Token} from "@/domain/models/token/token";
import {SCOPES, TOKEN_PATH} from "@/config/googleApis";

@injectable()
export class AccessTokenPromptLauncher {
  private readonly readlineInterface: readline.Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  constructor(
    @inject(TYPES.OAuth2Client)
    private readonly oAuth2Client: OAuth2Client,
    @inject(TYPES.TokenRepository)
    private readonly tokenFileRepository: TokenRepository
  ) {}

  /**
   * query new token after prompting for user authorization
   */
  async query(): Promise<Token> {
    return new Promise( (resolve, reject) => {
      const authUrl = this.oAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: SCOPES,
      });
      console.log('Authorize this app by visiting this url:', authUrl);
      this.readlineInterface.question('Enter the code from that page here: ', (code: any) => {
        this.readlineInterface.close();
        this.oAuth2Client.getToken(code, (err, token) => {
          if (err) return reject(err);
          if (!token) return reject("Token is not defined.");
          this.oAuth2Client.setCredentials(token);
          resolve(new Token(token))
        });
      });
    })
  }

  async save(token: Token): Promise<void> {
    await this.tokenFileRepository.write(TOKEN_PATH,token)
  }
}