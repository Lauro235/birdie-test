import pool from "../index"

const dbRowCount = () => {
    return new Promise((resolve, reject)=>{
        pool.query(
        `SELECT
            SUM(CASE WHEN event_type = "visit_completed" THEN 1 ELSE 0 END) AS visit,
            SUM(CASE WHEN event_type = "mood_observation" THEN 1 ELSE 0 END) AS mood,
            SUM(CASE WHEN event_type = "physical_health_observation" THEN 1 ELSE 0 END) AS healthObservation,
            SUM(CASE WHEN event_type = "regular_medication_taken" THEN 1 ELSE 0 END) AS medsTaken,
            SUM(CASE WHEN event_type = "regular_medication_not_taken" THEN 1 ELSE 0 END) AS medsNotTaken,
            SUM(CASE WHEN event_type = "alert_raised" THEN 1 ELSE 0 END) AS alert
        FROM events
            WHERE timestamp REGEXP "2019-05-12";`,  (error, elements)=>{
            if(error){
                return reject(error);
            }
            return resolve({
                visit: elements[0].visit,
                mood: elements[0].mood,
                healthObservation: elements[0].healthObservation,
                medsTaken: elements[0].medsTaken,
                medsNotTaken: elements[0].medsNotTaken,
                alert: elements[0].alert
            });
        });
    });
};

export default dbRowCount;