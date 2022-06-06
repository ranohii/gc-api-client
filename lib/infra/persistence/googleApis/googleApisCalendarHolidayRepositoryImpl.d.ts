import { HolidayRepository } from "@/domain/models/calendarEvent/holidayRepository";
import { Holiday } from "@/domain/models/calendarEvent/holiday";
export declare class GoogleApisCalendarHolidayRepositoryImpl implements HolidayRepository {
    private readonly fetch;
    private readonly url;
    constructor();
    getAll(): Promise<Holiday[]>;
    findByDate(start: string, end: string): Promise<Holiday>;
}
