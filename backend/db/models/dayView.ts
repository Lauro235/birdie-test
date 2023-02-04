import pool from "../index"

const dayView = () => {
    return new Promise((resolve, reject)=>{
        pool.query(
        `SELECT
            payload_as_text as payload
        FROM events
            WHERE timestamp REGEXP "2019-05-12";`,  (error, elements) =>{
            if(error){
                return reject(error);
            }
            return resolve({
                payload: elements[0].payload
            });
        });
    });
};

export default dayView;