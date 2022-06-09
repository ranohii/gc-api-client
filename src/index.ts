/**
 * @license
 * Copyright Yudai Hirano.
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
import {Dayjs} from "dayjs";
import {DateUtils} from "@/shared/util/DateUtils";

class GoogleCalendarApiClient {
  private dayOffChecker: DayOffChecker | null = null

  async init() {
    const oAuth2ClientManager = container.get<OAuth2ClientManager>(TYPES.OAuth2ClientManager);
    await oAuth2ClientManager.init()
    // NOTE: Keep this container.get order because the dependency of dayOffChecker cannot be resolved until oAuth2Client is initialized.
    this.dayOffChecker = container.get<DayOffChecker>(TYPES.DayOffChecker);
  }

  async isDayOff(date: Dayjs = DateUtils.today()): Promise<any> {
    if (!this.dayOffChecker) {
      await this.init()
      return await this.isDayOff(date)
    }
    return await this.dayOffChecker.execute(date)
  }
}

let gcApiClient;
export default gcApiClient = new GoogleCalendarApiClient();
