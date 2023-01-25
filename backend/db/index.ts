import * as mysql from 'mysql'
import env from '../config'

const awsConnection = mysql.createConnection({
  host: env.DBHOST,
  port: Number(env.DBPORT),
  user: env.DBUSER,
  password: env.DBPASSWORD,
  database: env.DB,
})

export default awsConnection;