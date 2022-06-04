import {
  Creator,
  DefaultEvent,
  End,
  Organizer,
  OriginalStartTime,
  Reminders, Start
} from "@/domain/models/calendarEvent/defaultEvent";
import {DayOffType} from "@/domain/models/calendarEvent/DayOffType";

export class PrivateEvent implements DefaultEvent {
  private readonly _created: string;
  private readonly _creator: Creator;
  private readonly _end: End;
  private readonly _etag: string;
  private readonly _eventType: string;
  private readonly _htmlLink: string;
  private readonly _iCalUID: string;
  private readonly _id: string;
  private readonly _kind: string;
  private readonly _organizer: Organizer;
  private readonly _originalStartTime: OriginalStartTime;
  private readonly _recurringEventId: string;
  private readonly _reminders: Reminders;
  private readonly _sequence: number;
  private readonly _start: Start;
  private readonly _status: string;
  private readonly _summary: string;
  private readonly _updated: string;

  constructor(created: string, creator: Creator, end: End, etag: string, eventType: string, htmlLink: string, iCalUID: string, id: string, kind: string, organizer: Organizer, originalStartTime: OriginalStartTime, recurringEventId: string, reminders: Reminders, sequence: number, start: Start, status: string, summary: string, updated: string) {
    this._created = created;
    this._creator = creator;
    this._end = end;
    this._etag = etag;
    this._eventType = eventType;
    this._htmlLink = htmlLink;
    this._iCalUID = iCalUID;
    this._id = id;
    this._kind = kind;
    this._organizer = organizer;
    this._originalStartTime = originalStartTime;
    this._recurringEventId = recurringEventId;
    this._reminders = reminders;
    this._sequence = sequence;
    this._start = start;
    this._status = status;
    this._summary = summary;
    this._updated = updated;
  }

  get created(): string {
    return this._created;
  }

  get creator(): Creator {
    return this._creator;
  }

  get end(): End {
    return this._end;
  }

  get etag(): string {
    return this._etag;
  }

  get eventType(): string {
    return this._eventType;
  }

  get htmlLink(): string {
    return this._htmlLink;
  }

  get iCalUID(): string {
    return this._iCalUID;
  }

  get id(): string {
    return this._id;
  }

  get kind(): string {
    return this._kind;
  }

  get organizer(): Organizer {
    return this._organizer;
  }

  get originalStartTime(): OriginalStartTime {
    return this._originalStartTime;
  }

  get recurringEventId(): string {
    return this._recurringEventId;
  }

  get reminders(): Reminders {
    return this._reminders;
  }

  get sequence(): number {
    return this._sequence;
  }

  get start(): Start {
    return this._start;
  }

  get status(): string {
    return this._status;
  }

  get summary(): string {
    return this._summary;
  }

  get updated(): string {
    return this._updated;
  }

  get isDayOff(): boolean {
    return this.summary === DayOffType.PAID_LEAVE
    || this.summary.includes(DayOffType.SUMMER_VACATION)
  }

  static fromDefaultEvent(event: DefaultEvent): PrivateEvent {
    return new PrivateEvent(
      event.created,
      event.creator,
      event.end,
      event.etag,
      event.eventType,
      event.htmlLink,
      event.iCalUID,
      event.id,
      event.kind,
      event.organizer,
      event.originalStartTime,
      event.recurringEventId,
      event.reminders,
      event.sequence,
      event.start,
      event.status,
      event.summary,
      event.updated,
    )
  }
}