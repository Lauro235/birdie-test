# Notes on timestamp Functionality

## Functionality

  A user will have the option to see the wellbeing of the patient in different timeframes from the dashboard.

  I.e by the
  - hour
  - day
  - week

Possible user experience
Eg.
1. The client clicks a button saying they want to view the latest week
2. A get request is sent to the endpoint timestamp/week

or
1. The client clicks a button saying they want to view the latest day
2. A get request is sent to the endpoint timestamp/day

or
1. The client clicks a button saying they want to view the latest hour
2. A get request is sent to the endpoint timestamp/hour

3. find most recent full week from sunday to saturday

## Useful queries

Select timestamps within a given time frame
`"SELECT timestamp FROM events WHERE timestamp REGEXP '2019-05-12' ORDER BY timestamp DESC;"`


```sql
"
SELECT timestamp, event_type
FROM events
  WHERE timestamp REGEXP '2019-05-12' AND care_recipient_id = 'ad3512a6-91b1-4d7d-a005-6f8764dd0111'
    ORDER BY timestamp DESC LIMIT 5;
"
```
*/