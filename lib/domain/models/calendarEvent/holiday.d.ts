import { Creator, End, Organizer, PublicEvent, Start } from "./publicEvent";
export declare class Holiday implements PublicEvent {
    private readonly _created;
    private readonly _creator;
    private readonly _description;
    private readonly _end;
    private readonly _etag;
    private readonly _eventType;
    private readonly _htmlLink;
    private readonly _iCalUID;
    private readonly _id;
    private readonly _kind;
    private readonly _organizer;
    private readonly _sequence;
    private readonly _start;
    private readonly _status;
    private readonly _summary;
    private readonly _transparency;
    private readonly _updated;
    private readonly _visibility;
    constructor(created: string, creator: Creator, description: string, end: End, etag: string, eventType: string, htmlLink: string, iCalUID: string, id: string, kind: string, organizer: Organizer, sequence: number, start: Start, status: string, summary: string, transparency: string, updated: string, visibility: string);
    get created(): string;
    get creator(): Creator;
    get description(): string;
    get end(): End;
    get etag(): string;
    get eventType(): string;
    get htmlLink(): string;
    get iCalUID(): string;
    get id(): string;
    get kind(): string;
    get organizer(): Organizer;
    get sequence(): number;
    get start(): Start;
    get status(): string;
    get summary(): string;
    get transparency(): string;
    get updated(): string;
    get visibility(): string;
    static fromPublicEvent(event: PublicEvent): Holiday;
}
