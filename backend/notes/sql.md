# SQL Query Notes

## Find number visit_completed events on 12th of May 2019 **No Error**

`SELECT COUNT(1) as dbCount 
        FROM events
            WHERE timestamp REGEXP "2019-05-12"
            AND event_type = "visit_completed"`,

## Attempt to sum all provided event type occurences
  `SELECT
      COUNT(1) AS dbCount,
      SUM(CASE WHEN event_type = "visit_completed" THEN 1 ELSE 0 END) AS visit,
      SUM(CASE WHEN event_type = "mood_observation" THEN 1 ELSE 0 END) AS mood,
      SUM(CASE WHEN event_type = "physical_health_observation" THEN 1 ELSE 0 END) AS healthObservation,
      SUM(CASE WHEN event_type = "regular_medication_taken" THEN 1 ELSE 0 END) AS medsTaken,
      SUM(CASE WHEN event_type = "regular_medication_not_taken" THEN 1 ELSE 0 END) AS medsNotTaken,
      SUM(CASE WHEN event_type = "alert_raised" THEN 1 ELSE 0 END) AS alert,
  FROM events
      WHERE timestamp REGEXP "2019-05-12";`,

### Error

sqlMessage: "You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'FROM events\n" +
    `            WHERE timestamp REGEXP "2019-05-12"' at line 8`,

## Successful attempt to sum all provided event type occurences

  `SELECT
      COUNT(1) AS dbCount,
      SUM(CASE WHEN event_type = "visit_completed" THEN 1 ELSE 0 END) AS visit,
      SUM(CASE WHEN event_type = "mood_observation" THEN 1 ELSE 0 END) AS mood,
      SUM(CASE WHEN event_type = "physical_health_observation" THEN 1 ELSE 0 END) AS healthObservation,
      SUM(CASE WHEN event_type = "regular_medication_taken" THEN 1 ELSE 0 END) AS medsTaken,
      SUM(CASE WHEN event_type = "regular_medication_not_taken" THEN 1 ELSE 0 END) AS medsNotTaken,
      SUM(CASE WHEN event_type = "alert_raised" THEN 1 ELSE 0 END) AS alert
  FROM events
      WHERE timestamp REGEXP "2019-05-12";`

  ### What I learnt

  Do not include a comma before the FROM statement!!!