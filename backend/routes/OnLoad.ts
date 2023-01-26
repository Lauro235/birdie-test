import * as express from "express";
import dbRowCount from "../db/models/dbRowCount"

const OnLoad = express.Router()

OnLoad.get("/", async (req, res) => {
    req == null
    const count = await dbRowCount();
    console.log(`This is the count: ${count}`);
  
    res.json(count)
  })

export default OnLoad;