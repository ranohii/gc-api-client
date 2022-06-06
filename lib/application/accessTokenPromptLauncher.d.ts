import { OAuth2Client } from "google-auth-library/build/src/auth/oauth2client";
import { TokenRepository } from "@/domain/models/token/tokenRepository";
import { Token } from "@/domain/models/token/token";
export declare class AccessTokenPromptLauncher {
    private readonly oAuth2Client;
    private readonly tokenFileRepository;
    private readonly readlineInterface;
    constructor(oAuth2Client: OAuth2Client, tokenFileRepository: TokenRepository);
    /**
     * query new token after prompting for user authorization
     */
    query(): Promise<Token>;
    save(token: Token): Promise<void>;
}
