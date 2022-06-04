import {CREDENTIALS_PATH, TOKEN_PATH} from "@/config/googleApis";
import {google} from "googleapis";
import {container} from "@/config/inversify.config";
import {OAuth2Client} from "google-auth-library/build/src/auth/oauth2client";
import {TYPES} from "@/config/types";
import {inject, injectable} from "inversify";
import {CredentialsRepository} from "@/domain/models/credentials/credentialsRepository";
import {TokenRepository} from "@/domain/models/token/tokenRepository";
import {AccessTokenPromptLauncher} from "@/application/accessTokenPromptLauncher";

@injectable()
export class OAuth2ClientManager {
  constructor(
    @inject(TYPES.CredentialsRepository)
    private readonly credentialsRepository: CredentialsRepository,
    @inject(TYPES.TokenRepository)
    private readonly tokenRepository: TokenRepository,
  ) {}

  async init() {
    try {
      const credentials = await this.credentialsRepository.read(CREDENTIALS_PATH)
      const oAuth2Client = new google.auth.OAuth2(credentials.client_id, credentials.client_secret, credentials.redirect_uris[0]);
      container.bind<OAuth2Client>(TYPES.OAuth2Client).toConstantValue(oAuth2Client);
      const token = await this.tokenRepository.read(TOKEN_PATH)
      oAuth2Client.setCredentials(token.value)
    } catch(error) {
      console.error(error)
      await OAuth2ClientManager.retryInit()
    }
  }

  private static async retryInit() {
    const accessTokenPromptLauncher = container.get<AccessTokenPromptLauncher>(TYPES.AccessTokenPromptLauncher)
    const token = await accessTokenPromptLauncher.query()
    await accessTokenPromptLauncher.save(token)
    const oAuth2Client = container.get<OAuth2Client>(TYPES.OAuth2Client)
    oAuth2Client.setCredentials(token.value)
  }
}