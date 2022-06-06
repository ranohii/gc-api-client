"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.container = void 0;

require("reflect-metadata");

var _inversify = require("inversify");

var _types = require("./types");

var _fsCredentialsRepositoryImpl = require("../infra/persistence/filesystem/fsCredentialsRepositoryImpl");

var _fsTokenRepositoryImpl = require("../infra/persistence/filesystem/fsTokenRepositoryImpl");

var _accessTokenPromptLauncher = require("../application/accessTokenPromptLauncher");

var _googleApisCalendarPrivateEventRepositoryImpl = require("../infra/persistence/googleApis/googleApisCalendarPrivateEventRepositoryImpl");

var _googleApisCalendarHolidayRepositoryImpl = require("../infra/persistence/googleApis/googleApisCalendarHolidayRepositoryImpl");

var _dayOffChecker = require("../application/dayOffChecker");

var _oAuth2ClientManager = require("../application/oAuth2ClientManager");

var container = new _inversify.Container({
  defaultScope: "Singleton"
}); // infra layer

exports.container = container;
container.bind(_types.TYPES.CredentialsRepository).to(_fsCredentialsRepositoryImpl.FsCredentialsRepositoryImpl);
container.bind(_types.TYPES.TokenRepository).to(_fsTokenRepositoryImpl.FsTokenRepositoryImpl);
container.bind(_types.TYPES.PrivateEventRepository).to(_googleApisCalendarPrivateEventRepositoryImpl.GoogleApisCalendarPrivateEventRepositoryImpl);
container.bind(_types.TYPES.HolidayRepository).to(_googleApisCalendarHolidayRepositoryImpl.GoogleApisCalendarHolidayRepositoryImpl); // application layer

container.bind(_types.TYPES.OAuth2ClientManager).to(_oAuth2ClientManager.OAuth2ClientManager);
container.bind(_types.TYPES.AccessTokenPromptLauncher).to(_accessTokenPromptLauncher.AccessTokenPromptLauncher);
container.bind(_types.TYPES.DayOffChecker).to(_dayOffChecker.DayOffChecker);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb250YWluZXIiLCJDb250YWluZXIiLCJkZWZhdWx0U2NvcGUiLCJiaW5kIiwiVFlQRVMiLCJDcmVkZW50aWFsc1JlcG9zaXRvcnkiLCJ0byIsIkZzQ3JlZGVudGlhbHNSZXBvc2l0b3J5SW1wbCIsIlRva2VuUmVwb3NpdG9yeSIsIkZzVG9rZW5SZXBvc2l0b3J5SW1wbCIsIlByaXZhdGVFdmVudFJlcG9zaXRvcnkiLCJHb29nbGVBcGlzQ2FsZW5kYXJQcml2YXRlRXZlbnRSZXBvc2l0b3J5SW1wbCIsIkhvbGlkYXlSZXBvc2l0b3J5IiwiR29vZ2xlQXBpc0NhbGVuZGFySG9saWRheVJlcG9zaXRvcnlJbXBsIiwiT0F1dGgyQ2xpZW50TWFuYWdlciIsIkFjY2Vzc1Rva2VuUHJvbXB0TGF1bmNoZXIiLCJEYXlPZmZDaGVja2VyIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbmZpZy9pbnZlcnNpZnkuY29uZmlnLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcInJlZmxlY3QtbWV0YWRhdGFcIjtcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCJpbnZlcnNpZnlcIjtcbmltcG9ydCB7IFRZUEVTIH0gZnJvbSBcIi4vdHlwZXNcIjtcbmltcG9ydCB7Q3JlZGVudGlhbHNSZXBvc2l0b3J5fSBmcm9tIFwiQC9kb21haW4vbW9kZWxzL2NyZWRlbnRpYWxzL2NyZWRlbnRpYWxzUmVwb3NpdG9yeVwiO1xuaW1wb3J0IHtGc0NyZWRlbnRpYWxzUmVwb3NpdG9yeUltcGx9IGZyb20gXCJAL2luZnJhL3BlcnNpc3RlbmNlL2ZpbGVzeXN0ZW0vZnNDcmVkZW50aWFsc1JlcG9zaXRvcnlJbXBsXCI7XG5pbXBvcnQge1Rva2VuUmVwb3NpdG9yeX0gZnJvbSBcIkAvZG9tYWluL21vZGVscy90b2tlbi90b2tlblJlcG9zaXRvcnlcIjtcbmltcG9ydCB7RnNUb2tlblJlcG9zaXRvcnlJbXBsfSBmcm9tIFwiQC9pbmZyYS9wZXJzaXN0ZW5jZS9maWxlc3lzdGVtL2ZzVG9rZW5SZXBvc2l0b3J5SW1wbFwiO1xuaW1wb3J0IHtBY2Nlc3NUb2tlblByb21wdExhdW5jaGVyfSBmcm9tIFwiQC9hcHBsaWNhdGlvbi9hY2Nlc3NUb2tlblByb21wdExhdW5jaGVyXCI7XG5pbXBvcnQge1ByaXZhdGVFdmVudFJlcG9zaXRvcnl9IGZyb20gXCJAL2RvbWFpbi9tb2RlbHMvY2FsZW5kYXJFdmVudC9wcml2YXRlRXZlbnRSZXBvc2l0b3J5XCI7XG5pbXBvcnQge0dvb2dsZUFwaXNDYWxlbmRhclByaXZhdGVFdmVudFJlcG9zaXRvcnlJbXBsfSBmcm9tIFwiQC9pbmZyYS9wZXJzaXN0ZW5jZS9nb29nbGVBcGlzL2dvb2dsZUFwaXNDYWxlbmRhclByaXZhdGVFdmVudFJlcG9zaXRvcnlJbXBsXCI7XG5pbXBvcnQge0hvbGlkYXlSZXBvc2l0b3J5fSBmcm9tIFwiQC9kb21haW4vbW9kZWxzL2NhbGVuZGFyRXZlbnQvaG9saWRheVJlcG9zaXRvcnlcIjtcbmltcG9ydCB7R29vZ2xlQXBpc0NhbGVuZGFySG9saWRheVJlcG9zaXRvcnlJbXBsfSBmcm9tIFwiQC9pbmZyYS9wZXJzaXN0ZW5jZS9nb29nbGVBcGlzL2dvb2dsZUFwaXNDYWxlbmRhckhvbGlkYXlSZXBvc2l0b3J5SW1wbFwiO1xuaW1wb3J0IHtEYXlPZmZDaGVja2VyfSBmcm9tIFwiQC9hcHBsaWNhdGlvbi9kYXlPZmZDaGVja2VyXCI7XG5pbXBvcnQge09BdXRoMkNsaWVudE1hbmFnZXJ9IGZyb20gXCJAL2FwcGxpY2F0aW9uL29BdXRoMkNsaWVudE1hbmFnZXJcIjtcblxuY29uc3QgY29udGFpbmVyID0gbmV3IENvbnRhaW5lcih7IGRlZmF1bHRTY29wZTogXCJTaW5nbGV0b25cIiB9KTtcblxuLy8gaW5mcmEgbGF5ZXJcbmNvbnRhaW5lci5iaW5kPENyZWRlbnRpYWxzUmVwb3NpdG9yeT4oVFlQRVMuQ3JlZGVudGlhbHNSZXBvc2l0b3J5KS50byhGc0NyZWRlbnRpYWxzUmVwb3NpdG9yeUltcGwpO1xuY29udGFpbmVyLmJpbmQ8VG9rZW5SZXBvc2l0b3J5PihUWVBFUy5Ub2tlblJlcG9zaXRvcnkpLnRvKEZzVG9rZW5SZXBvc2l0b3J5SW1wbCk7XG5jb250YWluZXIuYmluZDxQcml2YXRlRXZlbnRSZXBvc2l0b3J5PihUWVBFUy5Qcml2YXRlRXZlbnRSZXBvc2l0b3J5KS50byhHb29nbGVBcGlzQ2FsZW5kYXJQcml2YXRlRXZlbnRSZXBvc2l0b3J5SW1wbCk7XG5jb250YWluZXIuYmluZDxIb2xpZGF5UmVwb3NpdG9yeT4oVFlQRVMuSG9saWRheVJlcG9zaXRvcnkpLnRvKEdvb2dsZUFwaXNDYWxlbmRhckhvbGlkYXlSZXBvc2l0b3J5SW1wbCk7XG5cbi8vIGFwcGxpY2F0aW9uIGxheWVyXG5jb250YWluZXIuYmluZDxPQXV0aDJDbGllbnRNYW5hZ2VyPihUWVBFUy5PQXV0aDJDbGllbnRNYW5hZ2VyKS50byhPQXV0aDJDbGllbnRNYW5hZ2VyKTtcbmNvbnRhaW5lci5iaW5kPEFjY2Vzc1Rva2VuUHJvbXB0TGF1bmNoZXI+KFRZUEVTLkFjY2Vzc1Rva2VuUHJvbXB0TGF1bmNoZXIpLnRvKEFjY2Vzc1Rva2VuUHJvbXB0TGF1bmNoZXIpO1xuY29udGFpbmVyLmJpbmQ8RGF5T2ZmQ2hlY2tlcj4oVFlQRVMuRGF5T2ZmQ2hlY2tlcikudG8oRGF5T2ZmQ2hlY2tlcik7XG5cbmV4cG9ydCB7IGNvbnRhaW5lciB9Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLElBQUlDLG9CQUFKLENBQWM7RUFBRUMsWUFBWSxFQUFFO0FBQWhCLENBQWQsQ0FBbEIsQyxDQUVBOzs7QUFDQUYsU0FBUyxDQUFDRyxJQUFWLENBQXNDQyxZQUFBLENBQU1DLHFCQUE1QyxFQUFtRUMsRUFBbkUsQ0FBc0VDLHdEQUF0RTtBQUNBUCxTQUFTLENBQUNHLElBQVYsQ0FBZ0NDLFlBQUEsQ0FBTUksZUFBdEMsRUFBdURGLEVBQXZELENBQTBERyw0Q0FBMUQ7QUFDQVQsU0FBUyxDQUFDRyxJQUFWLENBQXVDQyxZQUFBLENBQU1NLHNCQUE3QyxFQUFxRUosRUFBckUsQ0FBd0VLLDBGQUF4RTtBQUNBWCxTQUFTLENBQUNHLElBQVYsQ0FBa0NDLFlBQUEsQ0FBTVEsaUJBQXhDLEVBQTJETixFQUEzRCxDQUE4RE8sZ0ZBQTlELEUsQ0FFQTs7QUFDQWIsU0FBUyxDQUFDRyxJQUFWLENBQW9DQyxZQUFBLENBQU1VLG1CQUExQyxFQUErRFIsRUFBL0QsQ0FBa0VRLHdDQUFsRTtBQUNBZCxTQUFTLENBQUNHLElBQVYsQ0FBMENDLFlBQUEsQ0FBTVcseUJBQWhELEVBQTJFVCxFQUEzRSxDQUE4RVMsb0RBQTlFO0FBQ0FmLFNBQVMsQ0FBQ0csSUFBVixDQUE4QkMsWUFBQSxDQUFNWSxhQUFwQyxFQUFtRFYsRUFBbkQsQ0FBc0RVLDRCQUF0RCJ9