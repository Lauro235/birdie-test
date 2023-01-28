import * as express from "express";
import dbRowCount from "../db/models/dbRowCount"
import sample from "../db/models/sample"

const OnLoad = express.Router()

OnLoad.get("/", async (req, res, next) => {
    req == null

    const count = await dbRowCount();
    console.log(`This is the count: ${JSON.stringify(count, null, 2)}`);
    res.json(count)
    next()
  }, async () => {
    console.log(await sample());
    
  })

export default OnLoad;