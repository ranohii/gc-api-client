import { Credentials } from "@/domain/models/credentials/credentials";
export interface CredentialsRepository {
    read(path: string): Promise<Credentials>;
}
