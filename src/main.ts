/**
 * @license
 * Copyright Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import {container} from "@/config/inversify.config";

// [START calendar_quickstart]
require('dotenv-flow').config();
import {google} from 'googleapis';
import {OAuth2Client} from "google-auth-library/build/src/auth/oauth2client";
import {CredentialsRepository} from "@/domain/models/credentials/credentialsRepository";
import {TYPES} from "@/config/types";
import {TokenRepository} from "@/domain/models/token/tokenRepository";
import {AccessTokenPromptLauncher} from "@/application/accessTokenPromptLauncher";
import {PrivateEventRepository} from "@/domain/models/calendarEvent/privateEventRepository";
import {HolidayRepository} from "@/domain/models/calendarEvent/holidayRepository";
import {DateUtils} from "@/shared/util/DateUtils";

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/calendar.readonly'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = process.env.TOKEN_PATH!;
const CREDENTIALS_PATH = process.env.CREDENTIALS_PATH!

const credentialsRepository = container.get<CredentialsRepository>(TYPES.CredentialsRepository);
const tokenRepository = container.get<TokenRepository>(TYPES.TokenRepository);
const holidayRepository = container.get<HolidayRepository>(TYPES.HolidayRepository);

(async () => {
  try {
    try {
      const credentials = await credentialsRepository.read(CREDENTIALS_PATH)
      const oAuth2Client = new google.auth.OAuth2(credentials.client_id, credentials.client_secret, credentials.redirect_uris[0]);
      container.bind<OAuth2Client>(TYPES.OAuth2Client).toConstantValue(oAuth2Client);
      const token = await tokenRepository.read(TOKEN_PATH)
      oAuth2Client.setCredentials(token.value)
    } catch (error) {
      console.log(error)
      const accessTokenPromptLauncher = container.get<AccessTokenPromptLauncher>(TYPES.AccessTokenPromptLauncher);
      const token = await accessTokenPromptLauncher.query()
      await accessTokenPromptLauncher.save(token)
    } finally {
      const { start, end } = DateUtils.getStartAndEndAsString(DateUtils.today(),1)
      const privateEventRepository = container.get<PrivateEventRepository>(TYPES.PrivateEventRepository);
      const privateEvents = await privateEventRepository.findListByDate(start, end)
      const holiday = await holidayRepository.findByDate(start, end)
      console.log({
        privateEvents,
        holiday
      })
      if (
        privateEvents.some(event => event.isDayOff)
        || holiday
      ) {
        console.log("execute script.")
      }
    }
  } catch (error) {
    console.log(error)
  }
})()
// [END calendar_quickstart]

export {
  SCOPES,
  TOKEN_PATH,
  CREDENTIALS_PATH,
};
