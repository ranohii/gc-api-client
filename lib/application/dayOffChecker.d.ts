import { CredentialsRepository } from "@/domain/models/credentials/credentialsRepository";
import { TokenRepository } from "@/domain/models/token/tokenRepository";
import { HolidayRepository } from "@/domain/models/calendarEvent/holidayRepository";
import { PrivateEventRepository } from "@/domain/models/calendarEvent/privateEventRepository";
import { Dayjs } from "dayjs";
export declare class DayOffChecker {
    private readonly credentialsRepository;
    private readonly tokenRepository;
    private readonly holidayRepository;
    private readonly privateEventRepository;
    constructor(credentialsRepository: CredentialsRepository, tokenRepository: TokenRepository, holidayRepository: HolidayRepository, privateEventRepository: PrivateEventRepository);
    execute(date: Dayjs): Promise<boolean>;
}
