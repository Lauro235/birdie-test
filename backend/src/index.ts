import app from "./application";
import dbRowCount from "../db/models/dbRowCount"
import * as cors from "cors"

const port = process.env.PORT || 8000;

app.use(cors())

app.get('/', async (req, res) => {
  req == null
  const count = await dbRowCount();
  console.log(`This is the count: ${count}`);

  res.json(count)
})

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server started at http://localhost:${port}`);
});
