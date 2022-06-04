import dayjs, {Dayjs} from "dayjs";
import "dayjs/locale/ja"

dayjs.locale("ja")

export class DateUtils {
  static today() {
    return dayjs()
  }

  static format(value: string | Date | Dayjs, template: string = "YY/MM/DD/HH:mm") {
    return dayjs(value).format(template)
  }

  static addDays(value: string | Date | Dayjs, days: number) {
    return dayjs(value).add(days, "day")
  }

  static getStartAndEndAsString(origin: Dayjs, days: number) {
    const start = DateUtils.format(origin, "YYYY-MM-DDT00:00:00")
    const end = DateUtils.format(DateUtils.addDays(origin, days - 1), "YYYY-MM-DDT23:59:59")
    return {
      start,
      end
    }
  }
}
