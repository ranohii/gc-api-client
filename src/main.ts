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
import {TYPES} from "@/config/types";
import {container} from "@/config/inversify.config";
import {OAuth2ClientManager} from "@/application/oAuth2ClientManager";
import {DayOffChecker} from "@/application/dayOffChecker";

const oAuth2ClientManager = container.get<OAuth2ClientManager>(TYPES.OAuth2ClientManager);

(async () => {
  await oAuth2ClientManager.init()
  const dayOffChecker = container.get<DayOffChecker>(TYPES.DayOffChecker);
  const isDayOff = await dayOffChecker.checkToday()
  console.log({isDayOff})
  if (isDayOff) return console.log("Skipped execution: Today is DayOff.")
})()
