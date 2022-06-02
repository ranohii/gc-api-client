import {Creator, End, Organizer, PublicEvent, Start} from "./publicEvent";

export class Holiday implements PublicEvent {
  private readonly _created: string;
  private readonly _creator: Creator;
  private readonly _description: string;
  private readonly _end: End;
  private readonly _etag: string;
  private readonly _eventType: string;
  private readonly _htmlLink: string;
  private readonly _iCalUID: string;
  private readonly _id: string;
  private readonly _kind: string;
  private readonly _organizer: Organizer;
  private readonly _sequence: number;
  private readonly _start: Start;
  private readonly _status: string;
  private readonly _summary: string;
  private readonly _transparency: string;
  private readonly _updated: string;
  private readonly _visibility: string;

  constructor(created: string, creator: Creator, description: string, end: End, etag: string, eventType: string, htmlLink: string, iCalUID: string, id: string, kind: string, organizer: Organizer, sequence: number, start: Start, status: string, summary: string, transparency: string, updated: string, visibility: string) {
    if (description !== "Public holiday") throw new Error("Event Description is invalid: Not public holiday")
    this._created = created;
    this._creator = creator;
    this._description = description;
    this._end = end;
    this._etag = etag;
    this._eventType = eventType;
    this._htmlLink = htmlLink;
    this._iCalUID = iCalUID;
    this._id = id;
    this._kind = kind;
    this._organizer = organizer;
    this._sequence = sequence;
    this._start = start;
    this._status = status;
    this._summary = summary;
    this._transparency = transparency;
    this._updated = updated;
    this._visibility = visibility;
  }

  get created(): string {
    return this._created;
  }

  get creator(): Creator {
    return this._creator;
  }

  get description(): string {
    return this._description;
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

  get transparency(): string {
    return this._transparency;
  }

  get updated(): string {
    return this._updated;
  }

  get visibility(): string {
    return this._visibility;
  }
}