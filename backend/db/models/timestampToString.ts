import pool from "../index"

interface Time {
  timestamp: string
}

// arg comes from timestampsToString
const retrieveTimestamps = () => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT timestamp, event_type FROM events WHERE timestamp REGEXP '2019-05-12' AND care_recipient_id = 'ad3512a6-91b1-4d7d-a005-6f8764dd0111' ORDER BY timestamp DESC LIMIT 5;", function (err, rows) {
      if (err) {
        return reject(err)
      };
      return resolve(rows)
    })
  });
}

// value is fed through 👇
const timestampsToString = async () => {
    return await retrieveTimestamps()
    .then((timestamps) => {
      const resultArr: string[] = []
      let result = Object.values<Time>(JSON.parse(JSON.stringify(timestamps)));
      result.forEach((entry) => resultArr.push(entry.timestamp));
      return resultArr
    })
}

export default timestampsToString;