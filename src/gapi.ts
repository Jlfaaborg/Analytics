import { google } from "googleapis";

const OAuth2Client = google.auth.OAuth2;
const client =
  "<clientID>";
const secret = "<secret>";
const redirect = "http://localhost:3000/oauth2callback";
const oauth2Client = new OAuth2Client(client, secret, redirect);
const scopes = [
  "https://www.googleapis.com/auth/analytics.edit",
  "https://www.googleapis.com/auth/analytics.manage.users"
];

const url = oauth2Client.generateAuthUrl({
  access_type: "offline",
  scope: scopes
});

const api = google.analytics({
  auth: oauth2Client,
  version: "v3"
});

export { api, oauth2Client, client, secret, redirect, url, scopes };
