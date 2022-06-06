import { CredentialsRepository } from "@/domain/models/credentials/credentialsRepository";
import { Credentials } from "@/domain/models/credentials/credentials";
export declare class FsCredentialsRepositoryImpl implements CredentialsRepository {
    private filesystem;
    read(path: string): Promise<Credentials>;
}
