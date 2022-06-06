import {CredentialsRepository} from "@/domain/models/credentials/credentialsRepository";
import {TYPES} from "@/config/types";
import {TokenRepository} from "@/domain/models/token/tokenRepository";
import {HolidayRepository} from "@/domain/models/calendarEvent/holidayRepository";
import {inject, injectable} from "inversify";
import {DateUtils} from "@/shared/util/DateUtils";
import {PrivateEventRepository} from "@/domain/models/calendarEvent/privateEventRepository";
import {Dayjs} from "dayjs";

@injectable()
export class DayOffChecker {
  constructor(
    @inject(TYPES.CredentialsRepository)
    private readonly credentialsRepository: CredentialsRepository,
    @inject(TYPES.TokenRepository)
    private readonly tokenRepository: TokenRepository,
    @inject(TYPES.HolidayRepository)
    private readonly holidayRepository: HolidayRepository,
    @inject(TYPES.PrivateEventRepository)
    private readonly privateEventRepository: PrivateEventRepository,
  ) {}

  async execute(date: Dayjs): Promise<boolean> {
    let isDayOff = false
    const { start, end } = DateUtils.getStartAndEndAsString(date, 1)
    console.log({start,end})
    try {
      try {
        const privateEvents = await this.privateEventRepository.findListByDate(start, end)
        console.dir(privateEvents)
        isDayOff = privateEvents.some(event => event.isDayOff)
      } catch (error) {
        console.log({error})
      } finally {
        const holiday = await this.holidayRepository.findByDate(start, end)
        console.dir(holiday)
        if (!isDayOff) {
         isDayOff = !!holiday
        }
      }
    } catch (error) {
      console.log({error})
    }
    return isDayOff
  }
}