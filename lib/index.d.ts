import { Dayjs } from "dayjs";
declare class GoogleCalendarApiClient {
    private dayOffChecker;
    init(): Promise<void>;
    isDayOff(date?: Dayjs): Promise<any>;
}
declare const gcApiClient: GoogleCalendarApiClient;
export { gcApiClient };
