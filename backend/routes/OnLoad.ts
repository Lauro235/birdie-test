import * as express from "express";
import dbEventCount from "../db/models/dbEventCount"

const OnLoad = express.Router()

OnLoad.get("/", async (req, res) => {
    req == null
    const count = await dbEventCount();
    console.log(`This is the count: ${JSON.stringify(count, null, 2)}`);
    res.json(count)
  })

export default OnLoad;