import { PrivateEventRepository } from "@/domain/models/calendarEvent/privateEventRepository";
import { OAuth2Client } from "google-auth-library/build/src/auth/oauth2client";
import { PrivateEvent } from "@/domain/models/calendarEvent/privateEvent";
export declare class GoogleApisCalendarPrivateEventRepositoryImpl implements PrivateEventRepository {
    private readonly oAuth2Client;
    constructor(oAuth2Client: OAuth2Client);
    getList(maxResults: number): Promise<any>;
    findListByDate(start: string, end: string): Promise<PrivateEvent[]>;
}
