import * as mysql from 'mysql'
import env from '../config'

/*
Was using mysql.createConnection, but found that I got the error
Cannot enqueue Handshake after invoking quit.
createPool combined with destroy connection means, the client make multiple requests to the database without this error appearing
*/


const pool = mysql.createPool({
  host: env.DBHOST,
  port: Number(env.DBPORT),
  user: env.DBUSER,
  password: env.DBPASSWORD,
  database: env.DB,
})

export default pool;