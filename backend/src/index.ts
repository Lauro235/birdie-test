import app from "./application";
import * as cors from "cors"
import OnLoad from "../routes/OnLoad"

const port = process.env.PORT || 8000;

app.use(cors())

app.use(OnLoad)



app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server started at http://localhost:${port}`);
});
