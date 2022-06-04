const TYPES = {
  OAuth2Client: Symbol.for("OAuth2Client"),
  // infra layer
  CredentialsRepository: Symbol.for("CredentialsRepository"),
  TokenRepository: Symbol.for("TokenRepository"),
  PrivateEventRepository: Symbol.for("PrivateEventRepository"),
  HolidayRepository: Symbol.for("HolidayRepository"),
  // application layer
  OAuth2ClientManager: Symbol.for("OAuth2ClientManager"),
  AccessTokenPromptLauncher: Symbol.for("AccessTokenPromptLauncher"),
  DayOffChecker: Symbol.for("DayOffChecker"),
};

export { TYPES };
