export interface DefaultEvent {
  kind: string
  etag: string
  id: string
  status: string
  htmlLink: string
  created: string
  updated: string
  summary: string
  creator: Creator
  organizer: Organizer
  start: Start
  end: End
  recurringEventId: string
  originalStartTime: OriginalStartTime
  iCalUID: string
  sequence: number
  reminders: Reminders
  eventType: string
}

export interface Creator {
  email: string
  self: boolean
}

export interface Organizer {
  email: string
  self: boolean
}

export interface Start {
  dateTime: string
  timeZone: string
}

export interface End {
  dateTime: string
  timeZone: string
}

export interface OriginalStartTime {
  dateTime: string
  timeZone: string
}

export interface Reminders {
  useDefault: boolean
}
