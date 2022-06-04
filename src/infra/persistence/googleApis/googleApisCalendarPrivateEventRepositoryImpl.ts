import {PrivateEventRepository} from "@/domain/models/calendarEvent/privateEventRepository";
import {inject, injectable} from "inversify";
import {TYPES} from "@/config/types";
import {OAuth2Client} from "google-auth-library/build/src/auth/oauth2client";
import {google} from "googleapis";
import {DefaultEvent} from "@/domain/models/calendarEvent/defaultEvent";
import {PrivateEvent} from "@/domain/models/calendarEvent/privateEvent";

@injectable()
export class GoogleApisCalendarPrivateEventRepositoryImpl implements PrivateEventRepository {
  constructor(
    @inject(TYPES.OAuth2Client)
    private readonly oAuth2Client: OAuth2Client,
  ) {}

  getList(maxResults: number): Promise<any> {
    return new Promise( (resolve, reject) => {
      const calendar = google.calendar({version: 'v3', auth: this.oAuth2Client});
      calendar.events.list({
        calendarId: 'primary',
        timeMin: (new Date()).toISOString(),
        maxResults: maxResults,
        singleEvents: true,
        orderBy: 'startTime',
      }, (err: any, res: any) => {
        if (err) return reject('The API returned an error: ' + err);
        const events = res.data.items;
        if (events.length) {
          console.log('Upcoming 10 events:');
          events.map((event: DefaultEvent) => {
            const start = event.start.dateTime;
            console.log(`${start} - ${event.summary}`);
            console.log({event})
          });
        } else {
          console.log('No upcoming events found.');
        }
        resolve()
      });
    })
  }

  findListByDate(start: string, end: string): Promise<PrivateEvent[]> {
    return new Promise( (resolve, reject) => {
      const calendar = google.calendar({version: 'v3', auth: this.oAuth2Client});
      calendar.events.list({
        calendarId: 'primary',
        timeMin: start,
        timeMax: end,
        singleEvents: true,
        orderBy: 'startTime',
      }, (err: any, res: any) => {
        if (err) return reject('The API returned an error: ' + err);
        const events = res.data.items;
        if (events.length === 0) return reject('No upcoming events found.');
        const results = events.map((event: DefaultEvent) => PrivateEvent.fromDefaultEvent(event));
        resolve(results)
      });
    })
  }
}