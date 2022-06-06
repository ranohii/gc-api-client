import { Creator, DefaultEvent, End, Organizer, OriginalStartTime, Reminders, Start } from "@/domain/models/calendarEvent/defaultEvent";
export declare class PrivateEvent implements DefaultEvent {
    private readonly _created;
    private readonly _creator;
    private readonly _end;
    private readonly _etag;
    private readonly _eventType;
    private readonly _htmlLink;
    private readonly _iCalUID;
    private readonly _id;
    private readonly _kind;
    private readonly _organizer;
    private readonly _originalStartTime;
    private readonly _recurringEventId;
    private readonly _reminders;
    private readonly _sequence;
    private readonly _start;
    private readonly _status;
    private readonly _summary;
    private readonly _updated;
    constructor(created: string, creator: Creator, end: End, etag: string, eventType: string, htmlLink: string, iCalUID: string, id: string, kind: string, organizer: Organizer, originalStartTime: OriginalStartTime, recurringEventId: string, reminders: Reminders, sequence: number, start: Start, status: string, summary: string, updated: string);
    get created(): string;
    get creator(): Creator;
    get end(): End;
    get etag(): string;
    get eventType(): string;
    get htmlLink(): string;
    get iCalUID(): string;
    get id(): string;
    get kind(): string;
    get organizer(): Organizer;
    get originalStartTime(): OriginalStartTime;
    get recurringEventId(): string;
    get reminders(): Reminders;
    get sequence(): number;
    get start(): Start;
    get status(): string;
    get summary(): string;
    get updated(): string;
    get isDayOff(): boolean;
    static fromDefaultEvent(event: DefaultEvent): PrivateEvent;
}