import app from "./application";
import * as cors from "cors"
import OnLoad from "../routes/OnLoad"
import TimeFrame from "../routes/TimeFrame"

const port = process.env.PORT || 8000;

app.use(cors())

app.use("/", OnLoad)
app.use("/time", TimeFrame)
// app.use("/", TimeFrame)



app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server started at http://localhost:${port}`);
});
