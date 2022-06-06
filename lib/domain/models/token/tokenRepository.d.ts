import { Token } from "./token";
export interface TokenRepository {
    read(path: string): Promise<Token>;
    write(path: string, token: Token): Promise<void>;
}
