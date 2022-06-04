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
import {HolidayRepository} from "@/domain/models/calendarEvent/holidayRepository";
import {GoogleApisCalendarHolidayRepositoryImpl} from "@/infra/persistence/googleApis/googleApisCalendarHolidayRepositoryImpl";
import {DayOffChecker} from "@/application/dayOffChecker";
import {OAuth2ClientManager} from "@/application/oAuth2ClientManager";

const container = new Container({ defaultScope: "Singleton" });

// infra layer
container.bind<CredentialsRepository>(TYPES.CredentialsRepository).to(FsCredentialsRepositoryImpl);
container.bind<TokenRepository>(TYPES.TokenRepository).to(FsTokenRepositoryImpl);
container.bind<PrivateEventRepository>(TYPES.PrivateEventRepository).to(GoogleApisCalendarPrivateEventRepositoryImpl);
container.bind<HolidayRepository>(TYPES.HolidayRepository).to(GoogleApisCalendarHolidayRepositoryImpl);

// application layer
container.bind<OAuth2ClientManager>(TYPES.OAuth2ClientManager).to(OAuth2ClientManager);
container.bind<AccessTokenPromptLauncher>(TYPES.AccessTokenPromptLauncher).to(AccessTokenPromptLauncher);
container.bind<DayOffChecker>(TYPES.DayOffChecker).to(DayOffChecker);

export { container }