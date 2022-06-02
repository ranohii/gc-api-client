import "reflect-metadata";
import { Container } from "inversify";
import { TYPES } from "./types";
import {CredentialsRepository} from "@/domain/models/credentials/credentialsRepository";
import {FsCredentialsRepositoryImpl} from "@/infra/persistence/filesystem/fsCredentialsRepositoryImpl";
import {TokenRepository} from "@/domain/models/token/tokenRepository";
import {FsTokenRepositoryImpl} from "@/infra/persistence/filesystem/fsTokenRepositoryImpl";
import {AccessTokenPromptLauncher} from "@/application/accessTokenPromptLauncher";
import {PrivateEventRepository} from "@/domain/models/calendarEvent/privateEventRepository";
import {GoogleApisCalendarPrivateEventRepositoryImpl} from "@/infra/persistence/googleApis/googleApisCalendarPrivateEventRepositoryImpl";

const container = new Container({ defaultScope: "Singleton" });

// infra layer
container.bind<CredentialsRepository>(TYPES.CredentialsRepository).to(FsCredentialsRepositoryImpl);
container.bind<TokenRepository>(TYPES.TokenRepository).to(FsTokenRepositoryImpl);

// application layer
container.bind<AccessTokenPromptLauncher>(TYPES.AccessTokenPromptLauncher).to(AccessTokenPromptLauncher);
container.bind<PrivateEventRepository>(TYPES.PrivateEventRepository).to(GoogleApisCalendarPrivateEventRepositoryImpl);

export { container }