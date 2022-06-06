import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/ja";
export declare class DateUtils {
    static today(): dayjs.Dayjs;
    static format(value: string | Date | Dayjs, template?: string): string;
    static addDays(value: string | Date | Dayjs, days: number): dayjs.Dayjs;
    static getStartAndEndAsString(origin: Dayjs, days: number): {
        start: string;
        end: string;
    };
}
