# Connect Frontend to Database


I was using mysql.createConnection to establish the initial connection, but found that I got the error
`Cannot enqueue Handshake after invoking quit.`
Using createPool combined with connection.destroy() I was able to ensure the client could make multiple requests to the database without this error appearing.


