import {HolidayRepository} from "@/domain/models/calendarEvent/holidayRepository";
import {Holiday} from "@/domain/models/calendarEvent/holiday";
import fetch from "node-fetch";
import {injectable} from "inversify";

@injectable()
export class GoogleApisCalendarHolidayRepositoryImpl implements HolidayRepository {
  private readonly fetch = fetch
  private readonly url: string

  constructor() {
    const BASE_CALENDAR_URL = process.env.BASE_CALENDAR_URL_FOR_PUBLIC_HOLIDAY!
    const BASE_CALENDAR_ID_FOR_PUBLIC_HOLIDAY = process.env.BASE_CALENDAR_ID_FOR_PUBLIC_HOLIDAY! // Calendar Id. This is public but apparently not documented anywhere officially.
    const API_KEY = process.env.API_KEY
    const CALENDAR_REGION = process.env.CALENDAR_REGION // This variable refers to region whose holidays do we need to fetch
    this.url = `${BASE_CALENDAR_URL}/${CALENDAR_REGION}%23${BASE_CALENDAR_ID_FOR_PUBLIC_HOLIDAY}/events?key=${API_KEY}`
  }

  getAll(): Promise<Holiday[]> {
    return new Promise((resolve, reject) => {
      // TODO: error handling.
      this.fetch(this.url).then(response => response.json()).then((data: any) => {
        if (data.error) return reject(data.error)
        const holidays = data.items.map((item: any) => Holiday.fromPublicEvent(item))
        resolve(holidays)
      })
    })
  }

  findByDate(start: string, end: string): Promise<Holiday> {
    return new Promise((resolve, reject) => {
      const url = `${this.url}&timeMin=${start}Z&timeMax=${end}Z`
      this.fetch(url).then(response => response.json()).then((data: any) => {
        if (data.error) return reject(data.error)
        if (data.items.length === 0) return reject("No upcoming holidays found.")
        const holiday = Holiday.fromPublicEvent(data.items[0])
        resolve(holiday)
      })
    })
  }
}
