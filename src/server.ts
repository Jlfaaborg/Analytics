import bodyParser from "body-parser";
import express from "express";
import path from "path";
import { analyticsRouter } from "./routes/analyticsRoute";
import { filterRouter } from "./routes/filterRoute";
import { indexRouter } from "./routes/indexRoute";
import { authRouter } from "./routes/oauthcall2back";

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const middlewares = [express.static(path.join(__dirname, "public"))];
app.use(middlewares);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", indexRouter);
app.use("/analytics", analyticsRouter);
app.use("/filter", filterRouter);
app.use("/oauth2callback/", authRouter);

app.use((req: any, res: any, next: any) => {
  res.status(404).send("Sorry can't find that!");
});

app.use((err: any, req: any, res: any, next: any) => {
  // tslint:disable-next-line: no-console
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(3000, () => {
  // tslint:disable-next-line: no-console
  console.log(`App running at http://localhost:3000`);
});
