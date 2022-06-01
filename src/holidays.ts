import fetch from "node-fetch"

const BASE_CALENDAR_URL = process.env.BASE_CALENDAR_URL_FOR_PUBLIC_HOLIDAY!
const BASE_CALENDAR_ID_FOR_PUBLIC_HOLIDAY = process.env.BASE_CALENDAR_ID_FOR_PUBLIC_HOLIDAY! // Calendar Id. This is public but apparently not documented anywhere officialy.
const API_KEY = process.env.API_KEY
const CALENDAR_REGION = process.env.CALENDAR_REGION // This variable refers to region whose holidays do we need to fetch

/**
 * Making a fetch request
 */
const url = `${BASE_CALENDAR_URL}/${CALENDAR_REGION}%23${BASE_CALENDAR_ID_FOR_PUBLIC_HOLIDAY}/events?key=${API_KEY}`

fetch(url).then(response => response.json()).then((data: any) => {
    const holidays = data.items;
    console.log({holidays})
})