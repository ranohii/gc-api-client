import { TokenRepository } from "@/domain/models/token/tokenRepository";
import { Token } from "@/domain/models/token/token";
export declare class FsTokenRepositoryImpl implements TokenRepository {
    private filesystem;
    read(path: string): Promise<Token>;
    write(path: string, token: Token): Promise<void>;
}
