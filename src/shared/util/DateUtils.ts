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

  static getStartAndEndAsString(origin: Dayjs, days: number, template: string = "YYYY-MM-DDT00:00:00[Z]") {
    const start = DateUtils.format(origin, template)
    const end = DateUtils.format(DateUtils.addDays(origin, days), template)
    return {
      start,
      end
    }
  }
}
