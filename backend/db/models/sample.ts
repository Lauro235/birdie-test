import pool from "../index"

const sample = () => {
    return new Promise((resolve, reject)=>{
        pool.query(
        `SELECT * FROM events
            WHERE timestamp REGEXP "2019-05-12"
            LIMIT 5;`,  (error, elements)=>{
            if(error){
                return reject(error);
            }
            return resolve(elements);
        });
    });
};

export default sample;