import { CredentialsRepository } from "@/domain/models/credentials/credentialsRepository";
import { TokenRepository } from "@/domain/models/token/tokenRepository";
export declare class OAuth2ClientManager {
    private readonly credentialsRepository;
    private readonly tokenRepository;
    constructor(credentialsRepository: CredentialsRepository, tokenRepository: TokenRepository);
    init(): Promise<void>;
    private static retryInit;
}
