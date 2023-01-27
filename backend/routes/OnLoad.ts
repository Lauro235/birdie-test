import * as express from "express";
import dbRowCount from "../db/models/dbRowCount"
import timestampsToString from "../db/models/timestampToString"

const OnLoad = express.Router()

OnLoad.get("/", async (req, _2, next) => {
    req == null
    const count = await dbRowCount();
    console.log(`This is the count: ${JSON.stringify(count, null, 2)}`);
    next();
    // res.json(count)
  }, async (_1, res) => {
    const val = await timestampsToString()
    console.log(`This is the val: ${val}`);
    res.json(val)
  })

export default OnLoad;