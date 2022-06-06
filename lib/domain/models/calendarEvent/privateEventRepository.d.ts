import { PrivateEvent } from "@/domain/models/calendarEvent/privateEvent";
export interface PrivateEventRepository {
    /**
     * Lists on the user's primary calendar.
     */
    getList(maxResults: number): Promise<any>;
    /**
     * Returns events filtered by date
     * @param start - Must be an RFC3339 timestamp with mandatory time zone offset, for example, 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z.
     * @param end - Must be an RFC3339 timestamp with mandatory time zone offset, for example, 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z.
     */
    findListByDate(start: string, end: string): Promise<PrivateEvent[]>;
}
