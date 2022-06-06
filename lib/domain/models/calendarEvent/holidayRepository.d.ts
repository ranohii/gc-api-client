import { Holiday } from "@/domain/models/calendarEvent/holiday";
export interface HolidayRepository {
    getAll(): Promise<Holiday[]>;
    /**
     * Returns the holiday filtered by date
     * @param start - Must be an RFC3339 timestamp with mandatory time zone offset, for example, 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z.
     * @param end - Must be an RFC3339 timestamp with mandatory time zone offset, for example, 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z.
     */
    findByDate(start: string, end: string): Promise<Holiday>;
}
