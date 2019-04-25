import express from "express";
import * as gapi from "../gapi";
const authRouter = express.Router();

authRouter.get("/", (req, res) => {
  const code = req.query.code;
  gapi.oauth2Client.getToken(code, (err: any, tokens: any) => {
    gapi.oauth2Client.credentials = tokens;
  });
  res.render("calledBack", {
    title: "Sample App Authorized"
  });
});

export { authRouter };
