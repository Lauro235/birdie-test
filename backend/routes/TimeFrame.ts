import * as express from "express";
import dayView from '../db/models/dayView'

const TimeFrame = express.Router()

TimeFrame.get("/", async (req, _2, next) => {
    req == null
    console.log(`This is the count the /day endpoint`);
    next()
  }, async (_1, res) => {
    const day = await dayView();
    console.log(day);
    res.send(day)
  })

export default TimeFrame;