import awsConnection from "../index"

const test = () => {
  awsConnection.connect(function(err) {
    if (err) throw err;
    awsConnection.query("SELECT * FROM events WHERE event_type = 'mood_observation' ORDER BY timestamp DESC LIMIT 5;", function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  });
}

export default test;