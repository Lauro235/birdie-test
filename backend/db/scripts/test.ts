import awsConnection from "../index"

const test = () => {
  awsConnection.connect((err) => {
    if(!err) {
      console.log("db is connected");
    }
    else {
      console.log(err);
    }
  })
}

export default test;