import {CredentialsInterface, Installed} from "@/domain/models/credentials/credentialsInterface";

export class Credentials implements Installed {
  private readonly _auth_provider_x509_cert_url: string;
  private readonly _auth_uri: string;
  private readonly _client_id: string;
  private readonly _client_secret: string;
  private readonly _project_id: string;
  private readonly _redirect_uris: string[];
  private readonly _token_uri: string;

  private constructor(auth_provider_x509_cert_url: string, auth_uri: string, client_id: string, client_secret: string, project_id: string, redirect_uris: string[], token_uri: string) {
    this._auth_provider_x509_cert_url = auth_provider_x509_cert_url;
    this._auth_uri = auth_uri;
    this._client_id = client_id;
    this._client_secret = client_secret;
    this._project_id = project_id;
    this._redirect_uris = redirect_uris;
    this._token_uri = token_uri;
  }

  get auth_provider_x509_cert_url(): string {
    return this._auth_provider_x509_cert_url;
  }

  get auth_uri(): string {
    return this._auth_uri;
  }

  get client_id(): string {
    return this._client_id;
  }

  get client_secret(): string {
    return this._client_secret;
  }

  get project_id(): string {
    return this._project_id;
  }

  get redirect_uris(): string[] {
    return this._redirect_uris;
  }

  get token_uri(): string {
    return this._token_uri;
  }

  static fromFile(credentials: CredentialsInterface): Credentials {
    const installed = credentials.installed
    return new Credentials(
      installed.auth_provider_x509_cert_url,
      installed.auth_uri,
      installed.client_id,
      installed.client_secret,
      installed.project_id,
      installed.redirect_uris,
      installed.token_uri
    )
  }
}