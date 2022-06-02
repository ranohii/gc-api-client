export interface PublicEvent {
  kind: string
  etag: string
  id: string
  status: string
  htmlLink: string
  created: string
  updated: string
  summary: string
  description: string
  creator: Creator
  organizer: Organizer
  start: Start
  end: End
  transparency: string
  visibility: string
  iCalUID: string
  sequence: number
  eventType: string
}

export interface Creator {
  email: string
  displayName: string
  self: boolean
}

export interface Organizer {
  email: string
  displayName: string
  self: boolean
}

export interface Start {
  date: string
}

export interface End {
  date: string
}
