export interface PrivateEventRepository {
  /**
   * Lists on the user's primary calendar.
   */
  getList(maxResults: number): Promise<any>
}