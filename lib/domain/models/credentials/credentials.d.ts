import { CredentialsInterface, Installed } from "@/domain/models/credentials/credentialsInterface";
export declare class Credentials implements Installed {
    private readonly _auth_provider_x509_cert_url;
    private readonly _auth_uri;
    private readonly _client_id;
    private readonly _client_secret;
    private readonly _project_id;
    private readonly _redirect_uris;
    private readonly _token_uri;
    private constructor();
    get auth_provider_x509_cert_url(): string;
    get auth_uri(): string;
    get client_id(): string;
    get client_secret(): string;
    get project_id(): string;
    get redirect_uris(): string[];
    get token_uri(): string;
    static fromFile(credentials: CredentialsInterface): Credentials;
}
