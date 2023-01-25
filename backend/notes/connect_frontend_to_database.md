# Connect Frontend to Database

[Cannot enqueue Handshake after invoking quit](https://stackoverflow.com/questions/14087924/cannot-enqueue-handshake-after-invoking-quit)

I was using mysql.createConnection to establish the initial connection, but found that I got the error
`Cannot enqueue Handshake after invoking quit.` each time the client repeatedly reloaded the site. This was because each time it was reloaded a connection would be established before the previous one had been terminated.

Using createPool combined with connection.destroy() I was able to ensure the client could make multiple requests to the database without this error appearing.

## Test.ts

Other changes have included
1. renaming result to rows
2. extracting rows with Object.values
3. Creating an interface to allow the timestamp to be extracted correctly as a string. Eventually this should be sent to the client.
