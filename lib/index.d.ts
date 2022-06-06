import { Dayjs } from "dayjs";
declare class GoogleCalendarApiClient {
    isDayOff(date?: Dayjs): Promise<boolean>;
}
declare const googleCalendarApiClient: GoogleCalendarApiClient;
export default googleCalendarApiClient;
