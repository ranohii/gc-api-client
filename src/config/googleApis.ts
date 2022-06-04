require('dotenv-flow').config();
// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/calendar.readonly'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = process.env.TOKEN_PATH!;
const CREDENTIALS_PATH = process.env.CREDENTIALS_PATH!

export {
  SCOPES,
  TOKEN_PATH,
  CREDENTIALS_PATH,
};
