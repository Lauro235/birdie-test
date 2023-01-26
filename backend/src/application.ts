import * as express from "express";
import {pingController} from "./controllers/ping";

const app = express();
app.use(express.json())

app.use(pingController);

export default app;
