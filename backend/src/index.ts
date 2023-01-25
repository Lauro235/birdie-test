import app from "./application";
import awsConnection from "../db/index"

const port = process.env.PORT || 8000;

awsConnection.connect((err) => {
  if(!err) {
    console.log("db is connected");
  }
  else {
    console.log(err);
  }
})

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server started at http://localhost:${port}`);
});
