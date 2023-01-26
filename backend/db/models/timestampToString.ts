import pool from "../index"

interface Time {
  timestamp: string
}

const timestampToString = () => {
  pool.getConnection((err, connection) => {
    if (err) {
      throw err;
    }
    connection.query("SELECT timestamp FROM events WHERE event_type = 'mood_observation' ORDER BY timestamp DESC LIMIT 5;", function (err, rows) {
      if (err) throw err;
      console.log(typeof rows);
      let result = Object.values<Time>(JSON.parse(JSON.stringify(rows)));
      result.forEach((entry) => console.log(entry.timestamp));
      console.log(result);
      
      connection.destroy();
      return result
    });
  });
}

export default timestampToString;