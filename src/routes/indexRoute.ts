import express from "express";
import * as gapi from "../gapi";

const indexRouter = express.Router();

indexRouter.get("/", (req: any, res: any) => {
  res.render("index", {
    url: gapi.url,
    url_text: "Get permissions"
  });
});

export { indexRouter };
